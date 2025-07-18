import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  // load translation using http -> see /public/locales
  // learn more: https://github.com/i18next/i18next-http-backend
  .use(HttpBackend)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    fallbackLng: { 
      'en-US': ['en'],
      'default': ['en']
    },
    supportedLngs: ['en', 'ar'],
    nonExplicitSupportedLngs: true,
    debug: true,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    detection: {
      order: ['localStorage', 'cookie', 'navigator', 'htmlTag'],
      caches: ['localStorage', 'cookie'],
      cleanCode: true,
    },
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json?v=1.1',
      partialBundledLanguages: true,
    },
    react: {
      useSuspense: true,
    }
  });

export default i18n;
