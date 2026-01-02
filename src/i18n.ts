import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { getLocales } from 'expo-localization';

import en from './locales/en.json';
import zh from './locales/zh.json';

const deviceLanguage = getLocales()[0]?.languageCode ?? 'en';
console.log('最終使用的語言代碼:', deviceLanguage);

i18n
  .use(initReactI18next)
  .init({
    // compatibilityJSON: 'v3',
    resources: {
      en: {
        translation: en,
      },
      zh: {
        translation: zh,
      },
    },
    lng: deviceLanguage.startsWith('zh') ? 'zh' : 'en', // default language
    fallbackLng: 'en', // if selected language translations are not available, use this
    interpolation: {
      escapeValue: false,
    },
  },(err) => {
    if(err){
      console.log(err);
    }
  });

export default i18n;