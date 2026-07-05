const cityData = {
  "广州": {
    code: "CAN · GUANGZHOU", color: "#128a75", center: [23.1291, 113.2644],
    transport: ["飞机", "高铁", "地铁"],
    quick: ["陈家祠与西关", "珠江夜景", "早茶半日"],
    pois: [["陈家祠", 23.1293, 113.2442], ["沙面", 23.1094, 113.2392], ["广州塔", 23.1065, 113.3245], ["东山口", 23.1237, 113.2967]]
  },
  "深圳": {
    code: "SZX · SHENZHEN", color: "#2b86c5", center: [22.5431, 114.0579],
    transport: ["高铁", "城际", "包车"],
    quick: ["深圳湾日落", "南头古城", "设计馆半日"],
    pois: [["莲花山", 22.5553, 114.0558], ["南头古城", 22.5385, 113.9203], ["深圳湾公园", 22.5158, 113.9562], ["海上世界", 22.4862, 113.9150]]
  },
  "香港": {
    code: "HKG · HONG KONG", color: "#ed6b52", center: [22.3193, 114.1694],
    transport: ["高铁", "口岸地铁", "渡轮"],
    quick: ["迪士尼整日", "中环与上环", "M+ 与维港"],
    pois: [["香港迪士尼", 22.3130, 114.0413], ["西九龙文化区", 22.3010, 114.1577], ["中环", 22.2819, 114.1583], ["太平山", 22.2759, 114.1455]]
  },
  "澳门": {
    code: "MFM · MACAU", color: "#b78a37", center: [22.1987, 113.5439],
    transport: ["大桥巴士", "渡轮", "跨境巴士"],
    quick: ["大三巴老城", "氹仔夜景", "路环慢游"],
    pois: [["大三巴", 22.1977, 113.5409], ["议事亭前地", 22.1937, 113.5398], ["官也街", 22.1537, 113.5566], ["路环", 22.1167, 113.5524]]
  },
  "珠海": {
    code: "ZUH · ZHUHAI", color: "#7669c7", center: [22.2710, 113.5767],
    transport: ["城际", "渡轮", "包车"],
    quick: ["情侣路", "日月贝", "北山村"],
    pois: [["日月贝", 22.2865, 113.5919], ["情侣路", 22.2698, 113.5900], ["北山村", 22.2248, 113.5236], ["横琴", 22.1169, 113.5076]]
  }
};

const cityNames = Object.keys(cityData);
const defaultState = {
  origin: "上海", startDate: "2026-07-14", tripDays: 8, partySize: 2,
  selectedCity: "广州", plans: {}, expenses: [], photos: {}
};

let state = loadState();
let bayMap;
let cityMap;
let poiLayer;
let plannedLayer;
let baseCityLayer;
let transitCityLayer;
let currentMapMode = "places";
let collabApplying = false;
let collabTimer = null;
const bayMarkers = {};

const $ = (id) => document.getElementById(id);

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem("gba-map-planner") || "null");
    return { ...defaultState, ...saved, plans: saved?.plans || {}, expenses: saved?.expenses || [], photos: saved?.photos || {} };
  } catch {
    return structuredClone(defaultState);
  }
}

function saveState(message) {
  try {
    localStorage.setItem("gba-map-planner", JSON.stringify(state));
    if (message) toast(message);
    scheduleCollabSync();
  } catch {
    toast("本机空间不足，请删除部分照片");
  }
}

function planFor(city) {
  state.plans[city] = state.plans[city] || { transport: cityData[city].transport[0], hotel: "", budget: "", plan: "", food: "", shop: "", notes: "", rows: [] };
  state.plans[city].rows = state.plans[city].rows || [];
  return state.plans[city];
}

function toast(message) {
  const node = $("toast");
  node.textContent = message;
  node.classList.add("show");
  clearTimeout(toast.timer);
  toast.timer = setTimeout(() => node.classList.remove("show"), 1600);
}

function initMaps() {
  if (!window.L) {
    $("bayMap").innerHTML = '<div class="empty-state">地图加载失败，请检查网络后刷新。</div>';
    return;
  }
  bayMap = L.map("bayMap", { zoomControl: false, scrollWheelZoom: false, minZoom: 7, maxZoom: 13 }).setView([22.62, 113.72], 8);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(bayMap);
  L.control.zoom({ position: "bottomright" }).addTo(bayMap);

  const routeCoords = cityNames.map((name) => cityData[name].center);
  L.polyline(routeCoords, { color: "#203246", weight: 3, opacity: .5, dashArray: "7 9" }).addTo(bayMap);

  cityNames.forEach((name) => {
    const data = cityData[name];
    const icon = L.divIcon({
      className: "",
      html: `<div class="city-marker" data-map-marker="${name}" style="--marker:${data.color}"></div>`,
      iconSize: [24, 24],
      iconAnchor: [12, 12]
    });
    const marker = L.marker(data.center, { icon }).addTo(bayMap);
    marker.bindTooltip(name, { direction: "top", offset: [0, -13], permanent: true, className: "city-tooltip" });
    marker.on("click", () => selectCity(name, true));
    bayMarkers[name] = marker;
  });

  cityMap = L.map("cityMap", { zoomControl: false, scrollWheelZoom: false }).setView(cityData[state.selectedCity].center, 12);
  baseCityLayer = L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(cityMap);
  transitCityLayer = L.tileLayer("https://tileserver.memomaps.de/tilegen/{z}/{x}/{y}.png", {
    maxZoom: 18,
    attribution: 'Map &copy; MeMoMaps CC-BY-SA, data &copy; OpenStreetMap'
  });
  L.control.zoom({ position: "bottomright" }).addTo(cityMap);
  poiLayer = L.layerGroup().addTo(cityMap);
  plannedLayer = L.layerGroup().addTo(cityMap);
}

function renderDock() {
  $("cityDock").innerHTML = cityNames.map((name) => {
    const data = cityData[name];
    return `<button type="button" data-city="${name}" class="${name === state.selectedCity ? "is-active" : ""}" style="--city:${data.color}">
      <i></i><span>${name}<small>${data.code.split(" · ")[0]}</small></span>
    </button>`;
  }).join("");
}

function selectCity(name, animate = false) {
  state.selectedCity = name;
  const data = cityData[name];
  if (bayMap) {
    bayMap.flyTo(data.center, animate ? 10 : 8, { duration: 1.15 });
    setTimeout(() => animate && $("cityWorkbench").scrollIntoView({ behavior: "smooth", block: "start" }), 720);
  }
  document.querySelectorAll("[data-map-marker]").forEach((node) => node.classList.toggle("is-active", node.dataset.mapMarker === name));
  renderDock();
  renderCity();
  saveState();
}

function renderCity() {
  const name = state.selectedCity;
  const data = cityData[name];
  const plan = planFor(name);
  $("cityCode").textContent = data.code;
  $("cityTitle").textContent = name;
  $("transportLabel").textContent = plan.transport;
  $("transportSwitch").innerHTML = data.transport.map((item) => `<button type="button" class="transport-option ${item === plan.transport ? "is-active" : ""}" data-transport="${item}">${item}</button>`).join("");
  $("quickPlans").innerHTML = data.quick.map((item) => `<button type="button" class="quick-plan" data-quick="${item}">+ ${item}</button>`).join("");
  document.querySelectorAll("[data-plan-field]").forEach((field) => field.value = plan[field.dataset.planField] ?? "");
  renderCityMap();
  renderPlanRows();
  renderPhotos();
  $("expenseCity").value = name;
}

function renderCityMap() {
  if (!cityMap) return;
  const data = cityData[state.selectedCity];
  cityMap.flyTo(data.center, 12, { duration: .9 });
  poiLayer.clearLayers();
  data.pois.forEach(([label, lat, lng], index) => {
    const marker = L.circleMarker([lat, lng], {
      radius: 8, fillColor: data.color, fillOpacity: 1, color: "white", weight: 3
    }).addTo(poiLayer);
    marker.bindPopup(`<strong>${label}</strong>`);
    marker.on("click", () => pulsePoi(index));
  });
  $("poiLegend").innerHTML = data.pois.map(([label], index) => `<button type="button" data-poi="${index}">${label}</button>`).join("");
  renderPlannedLandmarks();
  setTimeout(() => cityMap.invalidateSize(), 150);
}

function pulsePoi(index) {
  const [, lat, lng] = cityData[state.selectedCity].pois[index];
  cityMap.flyTo([lat, lng], 15, { duration: .8 });
  const layers = poiLayer.getLayers();
  layers[index]?.openPopup();
  if (layers[index]) {
    layers[index].setStyle({ radius: 14 });
    setTimeout(() => layers[index].setStyle({ radius: 8 }), 500);
  }
}


function defaultRowDate(index) {
  const date = new Date(`${state.startDate}T12:00:00`);
  date.setDate(date.getDate() + index);
  return date.toISOString().slice(0, 10);
}

function renderPlanRows() {
  const rows = planFor(state.selectedCity).rows;
  $("planRows").innerHTML = rows.length ? rows.map((row, index) => `
    <tr class="${row.lat ? "is-located" : ""}">
      <td><input type="date" data-row-field="date" data-row-index="${index}" value="${row.date || ""}"></td>
      <td><input type="time" data-row-field="time" data-row-index="${index}" value="${row.time || ""}"></td>
      <td><input data-row-field="place" data-row-index="${index}" value="${row.place || ""}" placeholder="输入地标"></td>
      <td><input data-row-field="note" data-row-index="${index}" value="${row.note || ""}" placeholder="交通 / 预约"></td>
      <td><button class="locate-button" type="button" data-locate-row="${index}" title="显示在地图">◎</button></td>
      <td><button class="remove-button" type="button" data-remove-row="${index}" title="删除">×</button></td>
    </tr>`).join("") : '<tr><td colspan="6"><div class="empty-state">点击“加一行”开始安排这座城市</div></td></tr>';
}

function addPlanRow() {
  const rows = planFor(state.selectedCity).rows;
  rows.push({ id: crypto.randomUUID(), date: defaultRowDate(rows.length), time: "", place: "", note: "", lat: null, lng: null });
  renderPlanRows();
  saveState();
}

function renderPlannedLandmarks() {
  if (!plannedLayer) return;
  plannedLayer.clearLayers();
  const rows = planFor(state.selectedCity).rows.filter((row) => row.lat && row.lng);
  const byDate = {};
  rows.forEach((row, index) => {
    byDate[row.date] = byDate[row.date] || [];
    byDate[row.date].push([row.lat, row.lng]);
    const icon = L.divIcon({ className: "", html: `<div class="planned-marker" style="--marker:${cityData[state.selectedCity].color}">${index + 1}</div>`, iconSize: [25,25], iconAnchor: [12,12] });
    L.marker([row.lat, row.lng], { icon }).bindPopup(`<strong>${row.place}</strong><br>${row.date || ""} ${row.time || ""}`).addTo(plannedLayer);
  });
  Object.values(byDate).forEach((points) => {
    if (points.length > 1) L.polyline(points, { color: cityData[state.selectedCity].color, weight: 4, opacity: .7, dashArray: "7 7" }).addTo(plannedLayer);
  });
}

async function locatePlanRow(index) {
  const row = planFor(state.selectedCity).rows[index];
  if (!row?.place) return toast("请先输入地标");
  toast("正在定位地标");
  try {
    const query = encodeURIComponent(`${row.place}, ${state.selectedCity}`);
    const response = await fetch(`https://nominatim.openstreetmap.org/search?format=jsonv2&limit=1&accept-language=zh-CN&q=${query}`);
    const result = (await response.json())[0];
    if (!result) return toast("没有找到这个地标");
    row.lat = Number(result.lat);
    row.lng = Number(result.lon);
    saveState();
    renderPlanRows();
    renderPlannedLandmarks();
    cityMap.flyTo([row.lat, row.lng], 15, { duration: .8 });
    toast("已显示在地图");
  } catch {
    toast("定位服务暂时不可用");
  }
}

function setMapMode(mode) {
  if (!cityMap || mode === currentMapMode) return;
  currentMapMode = mode;
  if (mode === "transit") {
    cityMap.removeLayer(baseCityLayer);
    transitCityLayer.addTo(cityMap);
  } else {
    cityMap.removeLayer(transitCityLayer);
    baseCityLayer.addTo(cityMap);
  }
  document.querySelectorAll("[data-map-mode]").forEach((button) => button.classList.toggle("is-active", button.dataset.mapMode === mode));
}

function renderRoute() {
  $("routeLine").innerHTML = cityNames.map((name, index) => {
    const plan = planFor(name);
    return `<button type="button" class="route-stop" data-city="${name}">
      <span>0${index + 1}</span><strong>${name}</strong><small>${plan.transport}</small>
    </button>`;
  }).join("");
  $("expenseCity").innerHTML = cityNames.map((name) => `<option value="${name}">${name}</option>`).join("");
}

function renderExpenses() {
  const total = state.expenses.reduce((sum, item) => sum + Number(item.amount || 0), 0);
  const people = Number(state.partySize) || 1;
  $("totalExpense").textContent = `¥${total.toFixed(0)}`;
  $("perPersonExpense").textContent = `人均 ¥${(total / people).toFixed(0)}`;
  $("expenseList").innerHTML = state.expenses.length
    ? state.expenses.map((item) => `<article class="expense-row">
        <span>${item.city}</span><b>${item.project}</b><small>${item.payer || "未填付款人"}</small>
        <strong>¥${Number(item.amount).toFixed(0)}</strong>
        <button type="button" data-delete-expense="${item.id}" aria-label="删除">×</button>
      </article>`).join("")
    : '<div class="empty-state">还没有消费记录</div>';
}

function fileToPhoto(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = reject;
    reader.onload = () => {
      const image = new Image();
      image.onerror = reject;
      image.onload = () => {
        const max = 900;
        const scale = Math.min(1, max / Math.max(image.width, image.height));
        const canvas = document.createElement("canvas");
        canvas.width = Math.round(image.width * scale);
        canvas.height = Math.round(image.height * scale);
        canvas.getContext("2d").drawImage(image, 0, 0, canvas.width, canvas.height);
        resolve({ id: crypto.randomUUID(), data: canvas.toDataURL("image/jpeg", .72) });
      };
      image.src = reader.result;
    };
    reader.readAsDataURL(file);
  });
}

function renderPhotos() {
  const photos = state.photos[state.selectedCity] || [];
  $("photoCount").textContent = `${photos.length} 张`;
  $("photoStrip").innerHTML = photos.map((photo) => `<div class="photo-card"><img src="${photo.data}" alt="${state.selectedCity}旅行照片"><button type="button" data-delete-photo="${photo.id}">×</button></div>`).join("");
}

function syncHeader() {
  $("origin").value = state.origin;
  $("startDate").value = state.startDate;
  $("tripDays").value = state.tripDays;
  $("partySize").value = state.partySize;
}


function cloudState() {
  const shared = JSON.parse(JSON.stringify(state));
  delete shared.photos;
  return shared;
}

function scheduleCollabSync() {
  if (collabApplying || !window.TogetherJS?.running) return;
  clearTimeout(collabTimer);
  collabTimer = setTimeout(() => {
    window.TogetherJS.send({ type: "gba-trip-state", state: cloudState() });
  }, 180);
}

function applySharedState(shared) {
  if (!shared) return;
  const localPhotos = state.photos || {};
  collabApplying = true;
  state = { ...defaultState, ...shared, photos: localPhotos, plans: shared.plans || {}, expenses: shared.expenses || [] };
  syncHeader();
  renderDock();
  renderRoute();
  renderExpenses();
  selectCity(state.selectedCity || "广州");
  collabApplying = false;
  localStorage.setItem("gba-map-planner", JSON.stringify(state));
  toast("已同步同伴的修改");
}

function initCollaboration() {
  if (!window.TogetherJS) return;
  window.TogetherJS.on("ready", () => {
    $("collabBar").classList.add("is-visible");
    $("collabStatus").textContent = "实时协作中 · 自动保存";
    if (!location.hash.includes("togetherjs=")) setTimeout(scheduleCollabSync, 400);
  });
  window.TogetherJS.on("close", () => {
    $("collabStatus").textContent = "协作已暂停 · 本机已保存";
  });
  window.TogetherJS.hub.on("hello", () => {
    setTimeout(() => {
      if (window.TogetherJS.running) window.TogetherJS.send({ type: "gba-trip-state", state: cloudState() });
    }, 250);
  });
  window.TogetherJS.hub.on("gba-trip-state", (message) => applySharedState(message.state));
}

function bindEvents() {
  document.querySelector(".map-mode-switch").addEventListener("click", (event) => {
    const button = event.target.closest("[data-map-mode]");
    if (button) setMapMode(button.dataset.mapMode);
  });
  $("addPlanRow").onclick = addPlanRow;
  $("planRows").addEventListener("input", (event) => {
    const input = event.target.closest("[data-row-field]");
    if (!input) return;
    const row = planFor(state.selectedCity).rows[Number(input.dataset.rowIndex)];
    row[input.dataset.rowField] = input.value;
    if (input.dataset.rowField === "place") { row.lat = null; row.lng = null; }
    saveState();
  });
  $("planRows").addEventListener("click", (event) => {
    const locate = event.target.closest("[data-locate-row]");
    if (locate) locatePlanRow(Number(locate.dataset.locateRow));
    const remove = event.target.closest("[data-remove-row]");
    if (remove) {
      planFor(state.selectedCity).rows.splice(Number(remove.dataset.removeRow), 1);
      renderPlanRows(); renderPlannedLandmarks(); saveState();
    }
  });
  ["origin", "startDate", "tripDays", "partySize"].forEach((id) => {
    $(id).addEventListener("input", () => {
      state[id] = id === "tripDays" || id === "partySize" ? Number($(id).value) : $(id).value;
      renderExpenses();
      saveState();
    });
  });
  $("peopleMinus").onclick = () => { state.partySize = Number(state.partySize || 0) - 1; syncHeader(); renderExpenses(); saveState(); };
  $("peoplePlus").onclick = () => { state.partySize = Number(state.partySize || 0) + 1; syncHeader(); renderExpenses(); saveState(); };
  $("savePlan").onclick = () => saveState("已保存到本机");
  $("resetMap").onclick = () => bayMap?.flyTo([22.62, 113.72], 8, { duration: 1 });
  $("previousCity").onclick = () => selectCity(cityNames[(cityNames.indexOf(state.selectedCity) + cityNames.length - 1) % cityNames.length]);
  $("nextCity").onclick = () => selectCity(cityNames[(cityNames.indexOf(state.selectedCity) + 1) % cityNames.length]);
  $("cityDock").onclick = (event) => { const node = event.target.closest("[data-city]"); if (node) selectCity(node.dataset.city, true); };
  $("routeLine").onclick = (event) => { const node = event.target.closest("[data-city]"); if (node) selectCity(node.dataset.city, true); };
  $("transportSwitch").onclick = (event) => {
    const node = event.target.closest("[data-transport]");
    if (!node) return;
    planFor(state.selectedCity).transport = node.dataset.transport;
    renderCity();
    renderRoute();
    saveState();
  };
  $("quickPlans").onclick = (event) => {
    const node = event.target.closest("[data-quick]");
    if (!node) return;
    const plan = planFor(state.selectedCity);
    plan.plan = plan.plan ? `${plan.plan}\n${node.dataset.quick}` : node.dataset.quick;
    renderCity();
    saveState();
  };
  $("planEditor").addEventListener("input", (event) => {
    const field = event.target.closest("[data-plan-field]");
    if (!field) return;
    planFor(state.selectedCity)[field.dataset.planField] = field.value;
    saveState();
  });
  $("poiLegend").onclick = (event) => { const node = event.target.closest("[data-poi]"); if (node) pulsePoi(Number(node.dataset.poi)); };
  $("addExpense").onclick = () => {
    const project = $("expenseProject").value.trim();
    const amount = Number($("expenseAmount").value);
    if (!project || !amount) return toast("请填写项目和金额");
    state.expenses.unshift({ id: crypto.randomUUID(), city: $("expenseCity").value, project, amount, payer: $("expensePayer").value.trim() });
    $("expenseProject").value = ""; $("expenseAmount").value = ""; $("expensePayer").value = "";
    renderExpenses(); saveState("已记一笔");
  };
  $("expenseList").onclick = (event) => {
    const node = event.target.closest("[data-delete-expense]");
    if (!node) return;
    state.expenses = state.expenses.filter((item) => item.id !== node.dataset.deleteExpense);
    renderExpenses(); saveState();
  };
  $("uploadPhoto").onclick = () => $("photoInput").click();
  $("photoInput").onchange = async (event) => {
    const files = [...event.target.files].slice(0, 8);
    if (!files.length) return;
    const photos = await Promise.all(files.map(fileToPhoto));
    state.photos[state.selectedCity] = [...(state.photos[state.selectedCity] || []), ...photos].slice(0, 12);
    event.target.value = "";
    renderPhotos(); saveState("照片已加入旅行记忆");
  };
  $("photoStrip").onclick = (event) => {
    const node = event.target.closest("[data-delete-photo]");
    if (!node) return;
    state.photos[state.selectedCity] = (state.photos[state.selectedCity] || []).filter((photo) => photo.id !== node.dataset.deletePhoto);
    renderPhotos(); saveState();
  };
  $("collabButton").onclick = () => {
    if (!window.TogetherJS) return toast("协作服务暂时未加载");
    if (!window.TogetherJS.running) {
      window.TogetherJS();
      toast("正在创建协作房间");
    } else {
      $("collabBar").classList.add("is-visible");
      toast("协作房间已经在线");
    }
  };
  $("copyInvite").onclick = async () => {
    if (!window.TogetherJS?.running) return toast("请先点击右上角“协作”");
    try { await navigator.clipboard.writeText(window.TogetherJS.shareUrl()); toast("协作邀请链接已复制"); } catch { toast("请复制浏览器地址栏链接"); }
  };
}

syncHeader();
renderDock();
renderRoute();
renderExpenses();
bindEvents();
initMaps();
selectCity(state.selectedCity);
initCollaboration();
