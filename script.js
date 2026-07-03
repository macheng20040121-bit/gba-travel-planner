const cities = {
  "广州": {
    code: "CAN",
    tone: "#159b83",
    pos: [260, 154],
    weight: 2,
    tags: "岭南 / 老城 / 珠江",
    hotel: {
      smart: ["体育西路/珠江新城", 520, "地铁密度高，去广州南和机场都顺"],
      comfort: ["珠江新城江景带", 850, "夜景好，餐厅和商场集中"],
      local: ["东山口/西关", 480, "街区感强，适合散步和早茶"]
    },
    food: ["早茶：虾饺、叉烧包、艇仔粥", "文明路糖水", "西关烧味与云吞面"],
    shop: ["天环/太古汇", "北京路步行街", "东山口买手店"],
    plans: {
      classic: ["陈家祠与西关街区", "沙面、永庆坊、骑楼散步", "珠江夜游或广州塔夜景"],
      food: ["早茶开场", "北京路到文明路小吃线", "荔湾湖周边糖水与烧味"],
      design: ["广东省博物馆与歌剧院轴线", "东山口洋楼街区", "K11、太古汇周边设计店"],
      slow: ["荔枝湾慢步", "越秀公园与中山纪念堂", "沿江西路傍晚散步"]
    }
  },
  "深圳": {
    code: "SZX",
    tone: "#2c8dd8",
    pos: [430, 188],
    weight: 1.5,
    tags: "口岸 / 设计 / 海岸",
    hotel: {
      smart: ["福田口岸/车公庙", 560, "衔接香港和市内地铁最稳"],
      comfort: ["深圳湾/后海", 880, "海边感强，去南山和蛇口顺"],
      local: ["南头古城/华侨城", 520, "创意街区和咖啡店密集"]
    },
    food: ["潮汕牛肉火锅", "车公庙夜宵", "蛇口咖啡与小酒馆"],
    shop: ["万象天地", "COCO Park", "海岸城"],
    plans: {
      classic: ["莲花山与市民中心", "南头古城或华侨城创意园", "深圳湾公园日落"],
      food: ["福田早午餐", "潮汕牛肉火锅", "南山咖啡与社区小店"],
      design: ["当代艺术与城市规划馆", "华侨城创意园", "海上世界文化艺术中心"],
      slow: ["人才公园散步", "蛇口海边下午茶", "盐田海滨栈道"]
    }
  },
  "香港": {
    code: "HKG",
    tone: "#f0674f",
    pos: [560, 120],
    weight: 2,
    tags: "维港 / 街区 / 购物",
    hotel: {
      smart: ["尖沙咀/佐敦", 980, "西九龙高铁、维港和购物都方便"],
      comfort: ["金钟/湾仔", 1450, "港岛动线好，夜景与餐厅选择多"],
      local: ["上环/坚尼地城", 1050, "街区气质强，咖啡和小店密集"]
    },
    food: ["茶餐厅早餐", "深水埗小吃", "中环或铜锣湾晚餐"],
    shop: ["海港城", "K11 MUSEA", "铜锣湾时代广场"],
    disney: ["港铁迪士尼线入园", "巡游、城堡与热门项目", "烟花后返回市区酒店"],
    plans: {
      classic: ["西九龙或尖沙咀抵达", "中环、上环、半山扶梯", "维港夜景与天星小轮"],
      food: ["茶餐厅早餐", "深水埗小吃与咖啡", "庙街或铜锣湾晚餐"],
      design: ["M+、香港故宫文化博物馆", "PMQ 元创方", "大馆与中环画廊"],
      slow: ["坚尼地城海边", "赤柱或南区半日", "太平山傍晚"]
    }
  },
  "澳门": {
    code: "MFM",
    tone: "#b8862f",
    pos: [506, 242],
    weight: 1.5,
    tags: "世遗 / 氹仔 / 葡风",
    hotel: {
      smart: ["氹仔/路氹", 780, "去官也街、机场和酒店综合体方便"],
      comfort: ["路氹度假区", 1250, "设施完整，适合放松一晚"],
      local: ["澳门半岛老城", 620, "世遗步行友好，夜间小吃多"]
    },
    food: ["葡挞与猪扒包", "葡国菜", "氹仔甜品与手信"],
    shop: ["威尼斯人/伦敦人", "新八佰伴", "官也街手信"],
    plans: {
      classic: ["大三巴、议事亭前地", "恋爱巷与疯堂斜巷", "氹仔官也街与夜景"],
      food: ["葡挞、猪扒包、咖啡", "老城葡国菜", "氹仔甜品与手信"],
      design: ["澳门艺术博物馆周边", "路环彩色街巷", "酒店建筑与光影"],
      slow: ["路环海边散步", "龙环葡韵", "老城小巷慢拍"]
    }
  },
  "珠海": {
    code: "ZUH",
    tone: "#7c6ad8",
    pos: [396, 246],
    weight: 1,
    tags: "海滨 / 口岸 / 海岛",
    hotel: {
      smart: ["拱北/吉大", 420, "去澳门口岸和情侣路都方便"],
      comfort: ["香洲海滨/日月贝", 680, "看海和散步体验更好"],
      local: ["北山/唐家湾", 460, "街区慢游，避开游客密度"]
    },
    food: ["海鲜排档", "湾仔口岸小吃", "横琴晚餐"],
    shop: ["富华里", "华发商都", "口岸手信补给"],
    plans: {
      classic: ["情侣路与日月贝", "野狸岛海边", "拱北或横琴收尾"],
      food: ["海鲜排档", "湾仔口岸周边小吃", "横琴晚餐"],
      design: ["珠海大剧院外观", "北山村街区", "横琴新城夜景"],
      slow: ["海滨公园", "唐家湾半日", "香炉湾看海"]
    }
  }
};

const iconPaths = {
  flight: '<path d="M2 16l20-8-20-8 5 8-5 8Z"></path><path d="M7 8h7"></path>',
  rail: '<path d="M6 3h12a2 2 0 0 1 2 2v9a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V5a2 2 0 0 1 2-2Z"></path><path d="M7 8h10"></path><path d="M8 21l3-3"></path><path d="M16 21l-3-3"></path>',
  metro: '<path d="M4 15V6a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3Z"></path><path d="M8 7h8"></path><path d="M8 13h.01"></path><path d="M16 13h.01"></path>',
  bus: '<path d="M5 16V6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v10"></path><path d="M5 10h14"></path><path d="M8 19h.01"></path><path d="M16 19h.01"></path><path d="M7 16h10"></path>',
  ferry: '<path d="M3 16h18l-2 4H5l-2-4Z"></path><path d="M7 16V9h9l3 7"></path><path d="M9 12h2"></path><path d="M13 12h2"></path>',
  car: '<path d="M5 16l1.8-5.2A3 3 0 0 1 9.6 9h4.8a3 3 0 0 1 2.8 1.8L19 16"></path><path d="M4 16h16v4H4z"></path><path d="M7 20h.01"></path><path d="M17 20h.01"></path>'
};

const transport = {
  "上海>广州": [
    { id: "flight", label: "飞广州", icon: "flight", hours: 3.8, cost: 1100, note: "默认首段，建议留足到机场时间" },
    { id: "rail", label: "高铁", icon: "rail", hours: 7.3, cost: 790, note: "更稳但占用白天时间" }
  ],
  "广州>深圳": [
    { id: "rail", label: "广深高铁", icon: "rail", hours: .7, cost: 95, note: "广州南至深圳北" },
    { id: "intercity", label: "城际线", icon: "metro", hours: 1.4, cost: 75, note: "更适合市区换乘" },
    { id: "car", label: "包车", icon: "car", hours: 2.2, cost: 620, note: "行李多时舒适" }
  ],
  "深圳>香港": [
    { id: "rail", label: "高铁西九龙", icon: "rail", hours: .5, cost: 90, note: "福田/深圳北到西九龙" },
    { id: "metro", label: "地铁口岸", icon: "metro", hours: 1.4, cost: 55, note: "落马洲/罗湖更灵活" },
    { id: "ferry", label: "蛇口船", icon: "ferry", hours: 1.2, cost: 160, note: "适合去港岛或机场方向" }
  ],
  "香港>澳门": [
    { id: "bridge", label: "大桥巴士", icon: "bus", hours: 1.4, cost: 70, note: "班次密，口岸换乘" },
    { id: "ferry", label: "上环快船", icon: "ferry", hours: 1.0, cost: 210, note: "直达澳门外港或氹仔" },
    { id: "coach", label: "跨境巴士", icon: "bus", hours: 2.0, cost: 180, note: "减少换乘但受路况影响" }
  ],
  "澳门>珠海": [
    { id: "walk", label: "拱北口岸", icon: "metro", hours: .8, cost: 20, note: "最省钱，适合轻行李" },
    { id: "car", label: "横琴打车", icon: "car", hours: .9, cost: 120, note: "去横琴或长隆更顺" },
    { id: "bridge", label: "大桥/口岸", icon: "bus", hours: 1.1, cost: 65, note: "和香港/机场方向衔接好" }
  ],
  "广州>香港": [
    { id: "rail", label: "高铁西九龙", icon: "rail", hours: 1.0, cost: 220, note: "广州南/东至香港西九龙" },
    { id: "viaSZX", label: "深圳中转", icon: "rail", hours: 1.8, cost: 155, note: "车次选择更多" }
  ],
  "广州>澳门": [
    { id: "railBus", label: "高铁+口岸", icon: "rail", hours: 2.2, cost: 160, note: "经珠海入澳" },
    { id: "car", label: "包车", icon: "car", hours: 2.7, cost: 760, note: "舒适但成本高" }
  ],
  "广州>珠海": [
    { id: "rail", label: "城际/高铁", icon: "rail", hours: 1.2, cost: 90, note: "广州南到珠海站" },
    { id: "car", label: "包车", icon: "car", hours: 2.2, cost: 560, note: "适合多人" }
  ],
  "深圳>澳门": [
    { id: "ferry", label: "蛇口至澳门", icon: "ferry", hours: 1.2, cost: 230, note: "适合南山出发" },
    { id: "railBus", label: "经珠海口岸", icon: "rail", hours: 2.2, cost: 140, note: "价格更稳" }
  ],
  "深圳>珠海": [
    { id: "ferry", label: "蛇口至九洲港", icon: "ferry", hours: 1.1, cost: 150, note: "跨珠江口省时" },
    { id: "car", label: "包车", icon: "car", hours: 2.5, cost: 650, note: "走虎门或深中通道方向" }
  ],
  "香港>珠海": [
    { id: "bridge", label: "大桥巴士", icon: "bus", hours: 1.3, cost: 70, note: "24 小时骨干选择" },
    { id: "ferry", label: "港澳码头船", icon: "ferry", hours: 1.2, cost: 200, note: "查九洲港船期" }
  ],
  "珠海>澳门": [
    { id: "walk", label: "拱北口岸", icon: "metro", hours: .8, cost: 20, note: "短距离高频" },
    { id: "car", label: "横琴打车", icon: "car", hours: .9, cost: 120, note: "适合氹仔方向" }
  ]
};

const hotelLabels = { smart: "便利型", comfort: "景观型", local: "街区型" };
const shopLabels = ["不购物", "轻量", "重点", "强购物"];
const expenseCategories = ["交通", "酒店", "饮食", "购物", "门票", "其他"];

const defaultState = {
  origin: "上海",
  arrivalCity: "广州",
  startDate: "2026-07-14",
  tripDays: 8,
  dailyBudget: 1200,
  pace: 2,
  focus: "classic",
  bufferMode: true,
  hotelStyle: "smart",
  shoppingLevel: 2,
  foodMode: true,
  disneyMode: true,
  activeModules: ["traffic", "hotel", "food", "shop", "disney"],
  stamps: {},
  memories: {},
  expenses: {},
  partySize: 2,
  expenseMode: true,
  selectedCities: ["广州", "深圳", "香港", "澳门", "珠海"],
  choices: {}
};

let state = loadState();
let pendingPhotoDay = null;
const clientId = localStorage.getItem("gbaTripClientId") || crypto.randomUUID();
localStorage.setItem("gbaTripClientId", clientId);
const collab = {
  app: null,
  db: null,
  docRef: null,
  planId: new URLSearchParams(location.search).get("plan"),
  ready: false,
  applyingRemote: false,
  saveTimer: null,
  firestore: null
};
const $ = (id) => document.getElementById(id);

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem("gbaTripPlanner") || "null");
    return saved ? { ...defaultState, ...saved } : { ...defaultState };
  } catch {
    return { ...defaultState };
  }
}

function saveState(silent = false) {
  try {
    localStorage.setItem("gbaTripPlanner", JSON.stringify(state));
    if (!silent) toast("已保存到本机浏览器");
  } catch (error) {
    console.error(error);
    if (!silent) toast("本机存储空间不足，请删除部分照片后再保存");
  }
}

function ensureMemoryBucket(key) {
  state.memories = state.memories || {};
  state.memories[key] = state.memories[key] || [];
  return state.memories[key];
}

function ensureExpenseBucket(key) {
  state.expenses = state.expenses || {};
  state.expenses[key] = state.expenses[key] || {};
  return state.expenses[key];
}

function cleanStateForCloud() {
  const cloudState = JSON.parse(JSON.stringify(state));
  delete cloudState.memories;
  return cloudState;
}

function validFirebaseConfig() {
  const config = window.TRIP_FIREBASE_CONFIG;
  return Boolean(config && config.apiKey && !String(config.apiKey).includes("YOUR_") && config.projectId && !String(config.projectId).includes("YOUR_"));
}

function setCollabUi(status, hint) {
  const label = $("roomLabel");
  const statusNode = $("collabStatus");
  const hintNode = $("collabHint");
  if (statusNode) statusNode.textContent = status;
  if (label) label.textContent = collab.planId || "未创建";
  if (hintNode) hintNode.textContent = hint;
}

function updatePlanUrl(planId) {
  const url = new URL(location.href);
  url.searchParams.set("plan", planId);
  history.replaceState(null, "", url.toString());
}

async function initCollaboration() {
  if (!validFirebaseConfig()) {
    setCollabUi(collab.planId ? "待配置" : "本机", "填写 firebase-config.js 后，同一分享链接会自动实时同步。");
    return;
  }

  try {
    const [{ initializeApp }, auth, firestore] = await Promise.all([
      import("https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js"),
      import("https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js"),
      import("https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js")
    ]);
    collab.firestore = firestore;
    collab.app = initializeApp(window.TRIP_FIREBASE_CONFIG);
    await auth.signInAnonymously(auth.getAuth(collab.app));
    collab.db = firestore.getFirestore(collab.app);
    collab.ready = true;
    setCollabUi(collab.planId ? "连接中" : "云端就绪", collab.planId ? "正在加入共享房间。" : "创建房间后即可分享给别人一起编辑。");
    if (collab.planId) attachRoom(collab.planId);
  } catch (error) {
    console.error(error);
    setCollabUi("离线", "云同步加载失败，本机规划仍可正常使用。");
  }
}

async function attachRoom(planId, seedCurrent = false) {
  if (!collab.ready) {
    setCollabUi("待配置", "先填写 firebase-config.js，再创建或加入共享房间。");
    return;
  }
  collab.planId = planId;
  updatePlanUrl(planId);
  const { doc, onSnapshot, getDoc, setDoc, serverTimestamp } = collab.firestore;
  collab.docRef = doc(collab.db, "tripPlans", planId);
  const current = await getDoc(collab.docRef);
  if (!current.exists() || seedCurrent) {
    await setDoc(collab.docRef, {
      state: cleanStateForCloud(),
      updatedAt: serverTimestamp(),
      updatedBy: clientId
    }, { merge: true });
  }
  onSnapshot(collab.docRef, (snapshot) => {
    const data = snapshot.data();
    if (!data || !data.state || data.updatedBy === clientId) return;
    collab.applyingRemote = true;
    state = { ...defaultState, ...data.state };
    render({ sync: false });
    collab.applyingRemote = false;
    toast("已同步他人的修改");
  });
  setCollabUi("实时", "你正在共享房间中，修改会自动同步给打开同一链接的人。");
}

function scheduleCloudSync() {
  if (!collab.ready || !collab.docRef || collab.applyingRemote) return;
  clearTimeout(collab.saveTimer);
  collab.saveTimer = setTimeout(async () => {
    const { setDoc, serverTimestamp } = collab.firestore;
    try {
      await setDoc(collab.docRef, {
        state: cleanStateForCloud(),
        updatedAt: serverTimestamp(),
        updatedBy: clientId
      }, { merge: true });
      setCollabUi("实时", "已同步到共享房间。");
    } catch (error) {
      console.error(error);
      setCollabUi("异常", "云同步失败，本机修改已保留。");
    }
  }, 380);
}

function toast(message) {
  const node = $("toast");
  node.textContent = message;
  node.classList.add("is-visible");
  clearTimeout(toast.timer);
  toast.timer = setTimeout(() => node.classList.remove("is-visible"), 1800);
}

function reverseKey(key) {
  return key.split(">").reverse().join(">");
}

function optionsFor(from, to) {
  const key = `${from}>${to}`;
  if (transport[key]) return { key, options: transport[key] };
  const rev = reverseKey(key);
  if (transport[rev]) {
    return { key, options: transport[rev].map((item) => ({ ...item, note: `${item.note}，反向同理` })) };
  }
  return {
    key,
    options: [
      { id: "rail", label: "铁路/城际", icon: "rail", hours: 2.2, cost: 180, note: "需按实际车次核验" },
      { id: "car", label: "包车", icon: "car", hours: 2.8, cost: 680, note: "适合多人和行李多" }
    ]
  };
}

function chosenOption(from, to) {
  const { key, options } = optionsFor(from, to);
  const chosenId = state.choices[key];
  return options.find((item) => item.id === chosenId) || options[0];
}

function normalizedCities() {
  const unique = state.selectedCities.filter((city, index, arr) => arr.indexOf(city) === index);
  if (!unique.includes(state.arrivalCity)) unique.unshift(state.arrivalCity);
  return unique[0] === state.arrivalCity ? unique : [state.arrivalCity, ...unique.filter((city) => city !== state.arrivalCity)];
}

function buildLegs() {
  const legs = [{ from: state.origin || "上海", to: state.arrivalCity, first: true }];
  const route = normalizedCities();
  for (let i = 0; i < route.length - 1; i++) legs.push({ from: route[i], to: route[i + 1] });
  return legs;
}

function formatDate(dateString, offset) {
  const date = new Date(`${dateString}T12:00:00`);
  date.setDate(date.getDate() + offset);
  return `${date.getMonth() + 1}月${date.getDate()}日`;
}

function cityDayAllocation() {
  const route = normalizedCities();
  const weights = route.map((city) => cities[city].weight);
  const totalWeight = weights.reduce((a, b) => a + b, 0);
  let remaining = state.tripDays;
  const allocation = route.map((city, i) => {
    const min = route.length > state.tripDays ? 0 : 1;
    const days = Math.max(min, Math.floor((state.tripDays * weights[i]) / totalWeight));
    remaining -= days;
    return { city, days };
  });
  let index = 0;
  while (remaining > 0) {
    allocation[index % allocation.length].days += 1;
    remaining -= 1;
    index += 1;
  }
  const hongKong = allocation.find((item) => item.city === "香港");
  if (state.disneyMode && hongKong && hongKong.days < 2 && state.tripDays >= route.length + 1) {
    const donor = allocation.find((item) => item.city !== "香港" && item.days > 1);
    if (donor) {
      donor.days -= 1;
      hongKong.days += 1;
    }
  }
  return allocation.filter((item) => item.days > 0);
}

function hotelBudget() {
  const allocation = cityDayAllocation();
  const nights = Math.max(0, state.tripDays - 1);
  let assigned = 0;
  let total = 0;
  allocation.forEach(({ city, days }, index) => {
    const cityNights = Math.max(0, Math.min(days, nights - assigned));
    assigned += cityNights;
    total += cityNights * cities[city].hotel[state.hotelStyle][1];
    if (index === allocation.length - 1 && assigned < nights) {
      total += (nights - assigned) * cities[city].hotel[state.hotelStyle][1];
    }
  });
  return total;
}

function setStateFromControls() {
  state.origin = $("origin").value.trim() || "上海";
  state.arrivalCity = $("arrivalCity").value;
  state.startDate = $("startDate").value || "2026-07-14";
  state.tripDays = Number($("tripDays").value);
  state.dailyBudget = Number($("dailyBudget").value);
  state.pace = Number($("pace").value);
  state.bufferMode = $("bufferMode").checked;
  state.hotelStyle = $("hotelStyle").value;
  state.shoppingLevel = Number($("shoppingLevel").value);
  state.foodMode = $("foodMode").checked;
  state.disneyMode = $("disneyMode").checked;
  state.partySize = Math.max(1, Number($("partySize").value) || 1);
  state.expenseMode = $("expenseMode").checked;
  state.selectedCities = normalizedCities();
}

function renderControls() {
  $("origin").value = state.origin;
  $("arrivalCity").value = state.arrivalCity;
  $("startDate").value = state.startDate;
  $("tripDays").value = state.tripDays;
  $("dailyBudget").value = state.dailyBudget;
  $("pace").value = state.pace;
  $("bufferMode").checked = state.bufferMode;
  $("hotelStyle").value = state.hotelStyle;
  $("shoppingLevel").value = state.shoppingLevel;
  $("foodMode").checked = state.foodMode;
  $("disneyMode").checked = state.disneyMode;
  $("partySize").value = state.partySize;
  $("expenseMode").checked = state.expenseMode;
  $("daysValue").textContent = state.tripDays;
  $("budgetValue").textContent = state.dailyBudget;
  $("paceValue").textContent = state.pace;
  $("shopValue").textContent = state.shoppingLevel;
  $("expensePeopleLabel").textContent = `${state.partySize} 人`;
  $("paceLabel").textContent = ["轻松", "均衡", "充实"][state.pace - 1];
  $("hotelLabel").textContent = hotelLabels[state.hotelStyle];

  $("cityGrid").innerHTML = Object.entries(cities).map(([name, city]) => {
    const active = state.selectedCities.includes(name);
    return `<button class="city-chip ${active ? "is-active" : ""}" data-city="${name}" type="button">
      <span>${name}</span><small>${city.code}</small>
    </button>`;
  }).join("");

  $("citySequence").innerHTML = normalizedCities().map((name, index) => `
    <div class="sequence__item">
      <span>${index + 1}</span>
      <strong>${name}</strong>
      <div class="sequence__tools">
        <button type="button" data-move="${name}" data-dir="-1" aria-label="${name} 上移">↑</button>
        <button type="button" data-move="${name}" data-dir="1" aria-label="${name} 下移">↓</button>
      </div>
    </div>
  `).join("");

  $("cityCount").textContent = `${normalizedCities().length} 城`;
  document.querySelectorAll(".tab").forEach((tab) => {
    tab.classList.toggle("is-active", tab.dataset.focus === state.focus);
  });
  document.querySelectorAll(".dock-button").forEach((button) => {
    button.classList.toggle("is-active", state.activeModules.includes(button.dataset.module));
  });
}

function renderRouteSvg() {
  const route = normalizedCities();
  const svg = $("routeSvg");
  const lineParts = [];
  for (let i = 0; i < route.length - 1; i++) {
    const a = cities[route[i]].pos;
    const b = cities[route[i + 1]].pos;
    const option = chosenOption(route[i], route[i + 1]);
    const dash = option.icon === "ferry" ? "8 8" : option.icon === "bus" ? "4 7" : "";
    lineParts.push(`<path d="M${a[0]} ${a[1]} C ${(a[0] + b[0]) / 2} ${a[1] - 54}, ${(a[0] + b[0]) / 2} ${b[1] + 54}, ${b[0]} ${b[1]}" stroke="${cities[route[i + 1]].tone}" stroke-width="5" stroke-dasharray="${dash}" fill="none" opacity=".78"></path>`);
  }

  svg.innerHTML = `
    <path d="M118 182 C 240 78, 409 92, 642 168" stroke="rgba(23,33,43,.08)" stroke-width="74" fill="none"></path>
    <path d="M116 228 C 290 280, 492 284, 664 206" stroke="rgba(21,155,131,.13)" stroke-width="48" fill="none"></path>
    ${lineParts.join("")}
    ${route.map((name, index) => {
      const city = cities[name];
      return `<g>
        <circle cx="${city.pos[0]}" cy="${city.pos[1]}" r="28" fill="white" stroke="${city.tone}" stroke-width="5"></circle>
        <circle cx="${city.pos[0]}" cy="${city.pos[1]}" r="8" fill="${city.tone}"></circle>
        <text x="${city.pos[0]}" y="${city.pos[1] + 52}" text-anchor="middle" fill="#17212b" font-size="20" font-weight="800">${name}</text>
        <text x="${city.pos[0]}" y="${city.pos[1] - 42}" text-anchor="middle" fill="${city.tone}" font-size="13" font-weight="800">D${index + 1}</text>
      </g>`;
    }).join("")}
    <g opacity=".78">
      <text x="54" y="54" fill="#17212b" font-size="14" font-weight="800">上海飞抵 ${state.arrivalCity}</text>
      <path d="M54 74 C 114 42, 162 61, 214 126" stroke="#f0674f" stroke-width="3" fill="none" stroke-dasharray="7 7"></path>
    </g>`;
}

function renderTransport() {
  $("transportLegs").innerHTML = buildLegs().map((leg) => {
    const { key, options } = optionsFor(leg.from, leg.to);
    const chosen = chosenOption(leg.from, leg.to);
    const buttons = options.map((option) => `
      <button type="button" class="leg-option ${option.id === chosen.id ? "is-active" : ""}" data-leg="${key}" data-choice="${option.id}">
        <svg viewBox="0 0 24 24" aria-hidden="true">${iconPaths[option.icon] || iconPaths.rail}</svg>
        ${option.label}
      </button>
    `).join("");
    return `<article class="leg">
      <div class="leg__top">
        <div>
          <div class="leg__title">${leg.from} -> ${leg.to}</div>
          <span class="leg__meta">${chosen.hours.toFixed(1)} 小时 · 约 ${chosen.cost} 元 · ${chosen.note}</span>
        </div>
      </div>
      <div class="leg__options">${buttons}</div>
    </article>`;
  }).join("");
}

function renderSummary() {
  const totals = buildLegs().reduce((acc, leg) => {
    const option = chosenOption(leg.from, leg.to);
    acc.hours += option.hours;
    acc.cost += option.cost;
    return acc;
  }, { hours: 0, cost: 0 });
  const hotels = hotelBudget();
  const foodAndShop = Math.round(state.tripDays * state.dailyBudget + state.shoppingLevel * 450);
  const totalBudget = Math.round(totals.cost + hotels + foodAndShop);
  $("summaryStart").textContent = `${formatDate(state.startDate, 0)} ${state.origin} -> ${state.arrivalCity}`;
  $("summaryTransit").textContent = `${totals.hours.toFixed(1)} 小时`;
  $("summaryHotel").textContent = `${hotels} 元`;
  $("summaryTotal").textContent = `${totalBudget} 元`;
  $("heroDays").textContent = state.tripDays;
  $("heroCities").textContent = normalizedCities().length;
  $("heroBudget").textContent = totalBudget;
}

function renderHotels() {
  const allocation = cityDayAllocation();
  let nightsLeft = Math.max(0, state.tripDays - 1);
  $("nightCount").textContent = `${nightsLeft} 晚`;
  $("hotelGrid").innerHTML = allocation.map(({ city, days }) => {
    const nights = Math.max(0, Math.min(days, nightsLeft));
    nightsLeft -= nights;
    const [area, price, reason] = cities[city].hotel[state.hotelStyle];
    return `<article class="hotel-card" style="--accent:${cities[city].tone}">
      <span>${city}</span>
      <strong>${area}</strong>
      <p>${reason}</p>
      <div><b>${nights} 晚</b><b>约 ${price}/晚</b></div>
    </article>`;
  }).join("");
}

function renderInsights() {
  const route = normalizedCities();
  const hasBorder = route.some((city) => city === "香港" || city === "澳门");
  const compact = state.tripDays < route.length + 2;
  const budgetTone = state.dailyBudget < 800 ? "经济型" : state.dailyBudget > 1700 ? "舒适型" : "均衡型";
  const ferryLeg = buildLegs().some((leg) => chosenOption(leg.from, leg.to).icon === "ferry");
  const disney = state.disneyMode && route.includes("香港");
  const items = [
    { title: "路线强度", small: compact ? "城市多，建议压缩景点数量" : "节奏可控", body: compact ? "每城保留 1 个主街区和 1 个夜间项目，减少跨城当天的硬排行程。" : "当前天数能覆盖五城核心体验，跨境日适合安排轻量活动。" },
    { title: "酒店策略", small: hotelLabels[state.hotelStyle], body: `当前偏向${hotelLabels[state.hotelStyle]}住宿；香港和澳门建议优先订可取消房，价格变化会明显。` },
    { title: "饮食购物", small: `${state.foodMode ? "每日美食" : "轻饮食"} · ${shopLabels[state.shoppingLevel]}`, body: state.shoppingLevel > 1 ? "广州、香港、澳门适合放重点购物时段；跨城当天少买重物。" : "购物强度较低，行李压力小，可以把时间留给街区和夜景。" },
    { title: "香港迪士尼", small: disney ? "已锁定整日" : "未启用", body: disney ? "香港段会自动安排整天迪士尼，建议住尖沙咀、佐敦或港岛线附近，烟花后返程更稳。" : "如果打开迪士尼模块，香港会自动让出一个完整白天。" },
    { title: "证件与天气", small: hasBorder ? "签注 + 7月雨季" : "内地段为主", body: ferryLeg ? "如遇台风或强降雨，船班可能调整；保留高铁或大桥巴士备选。" : "港澳通行证、签注、流量和支付方式建议出发前逐项确认。" }
  ];
  $("insights").innerHTML = items.map((item) => `<article class="insight"><strong>${item.title}</strong><small>${item.small}</small><p>${item.body}</p></article>`).join("");
}

function dayEntries(city, dayIndex, cityDayIndex) {
  const cityData = cities[city];
  const plans = [...(cityData.plans[state.focus] || cityData.plans.classic)];
  const firstDay = cityDayIndex === 0 && dayIndex > 0;
  const isArrival = dayIndex === 0;
  const disneyDay = state.disneyMode && city === "香港" && cityDayIndex === 1;
  if (state.disneyMode && city === "香港" && cityDayIndex === 0 && plans.length > 2) {
    plans[2] = "维港夜景，早点回酒店为迪士尼日留体力";
  }
  if (disneyDay) return cityData.disney;
  if (isArrival) plans[0] = `${state.origin}飞抵${state.arrivalCity}，入住后轻量散步`;
  if (firstDay) plans[0] = `${city}抵达、酒店放行李、熟悉周边`;
  if (state.bufferMode && firstDay && (city === "香港" || city === "澳门")) {
    plans.splice(1, 0, "通关、换乘、通讯和支付方式缓冲");
  }
  return plans.slice(0, state.pace === 1 ? 2 : 3);
}

function itineraryDays() {
  const allocation = cityDayAllocation();
  let dayIndex = 0;
  const days = [];
  allocation.forEach(({ city, days: cityDays }) => {
    for (let i = 0; i < cityDays && dayIndex < state.tripDays; i++) {
      const cityData = cities[city];
      const isDisney = state.disneyMode && city === "香港" && i === 1;
      days.push({
        key: `day-${dayIndex + 1}`,
        number: dayIndex + 1,
        date: formatDate(state.startDate, dayIndex),
        city,
        cityData,
        cityDayIndex: i,
        isDisney
      });
      dayIndex += 1;
    }
  });
  return days;
}

function expenseTotalForKey(key) {
  const bucket = state.expenses?.[key] || {};
  return expenseCategories.reduce((sum, category) => sum + (Number(bucket[category]) || 0), 0);
}

function memoryCount() {
  return Object.values(state.memories || {}).reduce((sum, items) => sum + items.length, 0);
}

function renderTimeline() {
  const cards = itineraryDays().map(({ key, number, date, city, cityData, cityDayIndex, isDisney }) => {
      const entries = dayEntries(city, number - 1, cityDayIndex);
      const [area] = cityData.hotel[state.hotelStyle];
      const food = cityData.food[(number - 1) % cityData.food.length];
      const shop = cityData.shop[(number - 1 + state.shoppingLevel) % cityData.shop.length];
      const photos = state.memories?.[key] || [];
      const expenseBucket = state.expenses?.[key] || {};
      return `<article class="day-card ${isDisney ? "is-disney" : ""}" style="--accent:${cityData.tone}" data-day-card="${key}">
        <span class="timeline__meta">Day ${number} · ${date}</span>
        <h3>${city}${isDisney ? " · 迪士尼整日" : ""}</h3>
        <span class="leg__meta">${cityData.tags}</span>
        <div class="day-badges">
          ${moduleBadge("hotel", `住：${area}`)}
          ${state.foodMode ? moduleBadge("food", `吃：${food}`) : ""}
          ${state.shoppingLevel > 0 ? moduleBadge("shop", `买：${shop}`) : ""}
          ${isDisney ? moduleBadge("disney", "迪士尼：巡游 + 烟花") : ""}
        </div>
        <ul class="day-list">
          ${entries.slice(0, 4).map((entry, idx) => `<li><b>${["上午", "下午", "傍晚", "夜间"][idx]}</b><span>${entry}</span></li>`).join("")}
        </ul>
        ${photos.length ? `<div class="memory-strip">${photos.slice(0, 4).map((photo) => `<img src="${photo.data}" alt="${city}旅行照片">`).join("")}</div>` : ""}
        ${state.expenseMode ? `<div class="expense-block">
          <div><strong>本日消费</strong><span>合计 ${expenseTotalForKey(key)} 元</span></div>
          <div class="expense-grid">
            ${expenseCategories.map((category) => `<label><span>${category}</span><input type="number" min="0" step="1" inputmode="decimal" data-expense="${key}" data-category="${category}" value="${expenseBucket[category] || ""}" placeholder="0"></label>`).join("")}
          </div>
        </div>` : ""}
        <div class="stamp-row">
          <button type="button" class="stamp ${state.stamps[key]?.hotel ? "is-stamped" : ""}" data-stamp="${key}" data-kind="hotel">订房</button>
          <button type="button" class="stamp ${state.stamps[key]?.food ? "is-stamped" : ""}" data-stamp="${key}" data-kind="food">美食</button>
          <button type="button" class="stamp ${state.stamps[key]?.shop ? "is-stamped" : ""}" data-stamp="${key}" data-kind="shop">购物</button>
          <button type="button" class="stamp memory-upload" data-upload-photo="${key}">上传照片</button>
        </div>
      </article>`;
    });
  $("timeline").innerHTML = cards.join("");
}

function renderExpenses() {
  const byCity = {};
  itineraryDays().forEach(({ key, city }) => {
    byCity[city] = byCity[city] || { total: 0, categories: {} };
    expenseCategories.forEach((category) => {
      const value = Number(state.expenses?.[key]?.[category]) || 0;
      byCity[city].total += value;
      byCity[city].categories[category] = (byCity[city].categories[category] || 0) + value;
    });
  });
  const total = Object.values(byCity).reduce((sum, item) => sum + item.total, 0);
  const perPerson = Math.round(total / Math.max(1, state.partySize));
  $("expenseTotal").textContent = `${total} 元 · 人均 ${perPerson} 元`;
  $("expenseSummary").innerHTML = total
    ? Object.entries(byCity).map(([city, item]) => `<article class="expense-card" style="--accent:${cities[city].tone}">
        <div><strong>${city}</strong><span>${item.total} 元</span></div>
        <p>人均 ${Math.round(item.total / Math.max(1, state.partySize))} 元</p>
        <div class="expense-tags">${expenseCategories.map((category) => `<b>${category} ${item.categories[category] || 0}</b>`).join("")}</div>
      </article>`).join("")
    : `<article class="empty-card">还没有记录消费。旅行中在每日卡片里填金额，这里会自动算总额和人均。</article>`;
}

function renderMemories() {
  const days = itineraryDays();
  const memoryItems = [];
  days.forEach(({ key, number, date, city }) => {
    (state.memories?.[key] || []).forEach((photo) => {
      memoryItems.push({ ...photo, key, number, date, city });
    });
  });
  $("memoryCount").textContent = `${memoryItems.length} 张`;
  $("memoryGallery").innerHTML = memoryItems.length
    ? memoryItems.map((photo) => `<figure class="memory-card">
        <img src="${photo.data}" alt="${photo.city}旅行照片">
        <figcaption>
          <strong>${photo.city} · Day ${photo.number}</strong>
          <span>${photo.date}</span>
          <button type="button" class="mini-button" data-delete-photo="${photo.key}" data-photo-id="${photo.id}">删除</button>
        </figcaption>
      </figure>`).join("")
    : `<article class="empty-card">还没有旅行照片。点击任意每日卡片里的“上传照片”，把打卡记忆放进这里。</article>`;
}

function moduleBadge(module, text) {
  if (!state.activeModules.includes(module)) return "";
  return `<span class="day-badge day-badge--${module}">${text}</span>`;
}

function fileToMemory(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = reject;
    reader.onload = () => {
      const image = new Image();
      image.onerror = reject;
      image.onload = () => {
      const maxEdge = 900;
        const scale = Math.min(1, maxEdge / Math.max(image.width, image.height));
        const canvas = document.createElement("canvas");
        canvas.width = Math.round(image.width * scale);
        canvas.height = Math.round(image.height * scale);
        const ctx = canvas.getContext("2d");
        ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
        resolve({
          id: crypto.randomUUID(),
          name: file.name,
          createdAt: new Date().toISOString(),
          data: canvas.toDataURL("image/jpeg", 0.72)
        });
      };
      image.src = reader.result;
    };
    reader.readAsDataURL(file);
  });
}

function render(options = {}) {
  const shouldSync = options.sync !== false;
  state.selectedCities = normalizedCities();
  renderControls();
  renderRouteSvg();
  renderTransport();
  renderSummary();
  renderHotels();
  renderInsights();
  renderTimeline();
  renderExpenses();
  renderMemories();
  saveState(true);
  if (shouldSync) scheduleCloudSync();
}

function applyPreset(name) {
  const presets = {
    smooth: ["广州", "深圳", "香港", "澳门", "珠海"],
    hkFirst: ["广州", "香港", "深圳", "珠海", "澳门"],
    westLoop: ["广州", "珠海", "澳门", "香港", "深圳"]
  };
  state.selectedCities = presets[name] || presets.smooth;
  state.arrivalCity = state.selectedCities[0];
  toast("路线已更新");
  render();
}

function bindEvents() {
  ["origin", "arrivalCity", "startDate", "tripDays", "dailyBudget", "pace", "bufferMode", "hotelStyle", "shoppingLevel", "foodMode", "disneyMode", "partySize", "expenseMode"].forEach((id) => {
    $(id).addEventListener("input", () => {
      setStateFromControls();
      render();
    });
  });

  $("timeline").addEventListener("input", (event) => {
    const input = event.target.closest("[data-expense][data-category]");
    if (!input) return;
    const bucket = ensureExpenseBucket(input.dataset.expense);
    const value = Number(input.value);
    if (input.value === "" || Number.isNaN(value)) {
      delete bucket[input.dataset.category];
    } else {
      bucket[input.dataset.category] = Math.max(0, value);
    }
    renderExpenses();
    saveState(true);
    scheduleCloudSync();
  });

  $("photoInput").addEventListener("change", async (event) => {
    if (!pendingPhotoDay) return;
    const files = Array.from(event.target.files || []).slice(0, 8);
    if (!files.length) return;
    try {
      const bucket = ensureMemoryBucket(pendingPhotoDay);
      const slots = Math.max(0, 12 - bucket.length);
      if (!slots) {
        toast("这一天最多保留 12 张照片");
        event.target.value = "";
        return;
      }
      const photos = await Promise.all(files.slice(0, slots).map(fileToMemory));
      bucket.push(...photos);
      event.target.value = "";
      toast(`已添加 ${photos.length} 张照片`);
      render({ sync: false });
    } catch (error) {
      console.error(error);
      toast("照片处理失败，请换一张试试");
    } finally {
      pendingPhotoDay = null;
    }
  });

  $("cityGrid").addEventListener("click", (event) => {
    const button = event.target.closest("[data-city]");
    if (!button) return;
    const city = button.dataset.city;
    if (state.selectedCities.includes(city)) {
      if (state.selectedCities.length === 1) return toast("至少保留一个目的地");
      state.selectedCities = state.selectedCities.filter((item) => item !== city);
      if (state.arrivalCity === city) state.arrivalCity = state.selectedCities[0];
    } else {
      state.selectedCities.push(city);
    }
    render();
  });

  $("citySequence").addEventListener("click", (event) => {
    const button = event.target.closest("[data-move]");
    if (!button) return;
    const city = button.dataset.move;
    const dir = Number(button.dataset.dir);
    const route = normalizedCities();
    const index = route.indexOf(city);
    const next = index + dir;
    if (next < 0 || next >= route.length) return;
    [route[index], route[next]] = [route[next], route[index]];
    state.selectedCities = route;
    state.arrivalCity = route[0];
    render();
  });

  document.addEventListener("click", (event) => {
    const legButton = event.target.closest("[data-leg][data-choice]");
    if (legButton) {
      state.choices[legButton.dataset.leg] = legButton.dataset.choice;
      render();
    }
    const tab = event.target.closest("[data-focus]");
    if (tab) {
      state.focus = tab.dataset.focus;
      render();
    }
    const preset = event.target.closest("[data-preset]");
    if (preset) applyPreset(preset.dataset.preset);
    const view = event.target.closest("[data-view]");
    if (view) {
      document.querySelectorAll(".switch").forEach((item) => item.classList.toggle("is-active", item === view));
      $("timeline").classList.toggle("is-compact", view.dataset.view === "compact");
    }
    const dock = event.target.closest("[data-module]");
    if (dock) {
      const module = dock.dataset.module;
      state.activeModules = state.activeModules.includes(module)
        ? state.activeModules.filter((item) => item !== module)
        : [...state.activeModules, module];
      render();
    }
    const stamp = event.target.closest("[data-stamp][data-kind]");
    if (stamp) {
      const key = stamp.dataset.stamp;
      const kind = stamp.dataset.kind;
      state.stamps[key] = state.stamps[key] || {};
      state.stamps[key][kind] = !state.stamps[key][kind];
      toast(state.stamps[key][kind] ? "已盖上行程印章" : "已取消印章");
      render();
    }
    const upload = event.target.closest("[data-upload-photo]");
    if (upload) {
      pendingPhotoDay = upload.dataset.uploadPhoto;
      $("photoInput").click();
    }
    const deletePhoto = event.target.closest("[data-delete-photo][data-photo-id]");
    if (deletePhoto) {
      const key = deletePhoto.dataset.deletePhoto;
      const id = deletePhoto.dataset.photoId;
      state.memories[key] = (state.memories?.[key] || []).filter((photo) => photo.id !== id);
      toast("照片已删除");
      render({ sync: false });
    }
  });

  $("savePlan").addEventListener("click", () => saveState(false));
  $("printPlan").addEventListener("click", () => window.print());
  $("createRoom").addEventListener("click", async () => {
    if (!collab.ready) {
      setCollabUi("待配置", "先填写 firebase-config.js 并部署，再创建在线协作房间。");
      toast("当前还没有配置云同步");
      return;
    }
    const planId = `gba-${Math.random().toString(36).slice(2, 8)}-${Date.now().toString(36).slice(-4)}`;
    await attachRoom(planId, true);
    toast("协作房间已创建");
  });
  $("copyRoomLink").addEventListener("click", async () => {
    if (!collab.planId) {
      toast("请先创建或加入房间");
      return;
    }
    try {
      await navigator.clipboard.writeText(location.href);
      toast("分享链接已复制");
    } catch {
      toast("复制失败，请从地址栏复制链接");
    }
  });
  $("resetPlan").addEventListener("click", () => {
    state = { ...defaultState, choices: {}, stamps: {}, memories: {}, expenses: {} };
    localStorage.removeItem("gbaTripPlanner");
    toast("已恢复默认方案");
    render();
  });
}

bindEvents();
render({ sync: false });
initCollaboration();
