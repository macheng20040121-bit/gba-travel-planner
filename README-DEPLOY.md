# 大湾区旅行规划器部署说明

这个文件夹就是可部署网页。直接上传 `outputs` 里的所有文件即可。

## 1. 开启实时协作

1. 创建 Firebase 项目。
2. 添加一个 Web App，把 Firebase config 复制到 `firebase-config.js`。
3. 开启 Authentication 里的 Anonymous 匿名登录。
4. 创建 Firestore Database。
5. Firestore Rules 可先用：

```js
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /tripPlans/{planId} {
      allow read, write: if request.auth != null;
    }
  }
}
```

## 2. 部署网页

可部署到 Firebase Hosting、Netlify、Vercel、GitHub Pages 或任何静态网站服务。

需要一起上传：

- `index.html`
- `styles.css`
- `script.js`
- `firebase-config.js`
- `assets/hero-gba.png`

如果使用 Firebase Hosting，本目录根部已经包含：

- `firebase.json`
- `firestore.rules`
- `.firebaserc.example`

把 `.firebaserc.example` 复制为 `.firebaserc`，并把 `YOUR_FIREBASE_PROJECT_ID` 换成你的 Firebase 项目 ID 后，可以执行：

```bash
firebase deploy
```

## 3. 使用方式

1. 打开部署后的网址。
2. 点击“创建房间”。
3. 点击“复制链接”发给别人。
4. 其他人打开同一链接后，交通、酒店、城市顺序、饮食购物和每日打卡会实时同步。

如果 `firebase-config.js` 仍是占位内容，页面会自动保持本机离线模式。

## 4. 照片与 AA 账本

- 每日行程卡片可以上传旅行打卡照片，照片会压缩后保存在当前浏览器本机。
- 为避免 Firestore 文档过大，照片默认不参与云端实时同步。
- 每日行程卡片可以记录交通、酒店、饮食、购物、门票、其他消费。
- AA 账本会按城市汇总总额，并按参与人数计算人均金额。
- 消费数据是轻量数字，会随共享房间实时同步。

如果需要多人共享同一个照片墙，后续可增加 Firebase Storage 上传。
