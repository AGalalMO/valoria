import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './assets/locales/en.json';
import ar from './assets/locales/ar.json';

// i18n configuration

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      ar: { translation: ar },
    },
    lng: 'en', // default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    // Do not change direction for Arabic
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  });

export default i18n; 