# 安裝啟動專案
npx create-expo-app@latest

- bottom sheet
npx expo install @gorhom/bottom-sheet react-native-reanimated react-native-gesture-handler

- React Query
npx expo install @tanstack/react-query

- i18next
npx expo install i18next react-i18next expo-localization

# 資料夾結構
MyProject/
├── src/
│   ├── components/    (放 UI 元件，如按鈕、卡片)
│   ├── screens/       (放整個頁面)
│   ├── services/      (關鍵！放模擬 API 的地方，以後接 CMS 就改這裡)
│   ├── hooks/         (放 React Query 的邏輯)
│   ├── locales/       (放多國語系翻譯檔)
│   ├── types/         (定義 TypeScript 的型別)
│   └── theme/         (定義顏色、字體，方便統一管理)
├── App.tsx
└── ...