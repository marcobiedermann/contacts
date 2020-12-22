import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-xhr-backend';
import { initReactI18next } from 'react-i18next';

i18n
  .use(Backend)
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    backend: {
      loadPath: 'assets/data/locales/{{lng}}/{{ns}}.json',
    },
    debug: true,
    fallbackLng: 'en',
    load: 'languageOnly',
    interpolation: {
      escapeValue: false,
    },
    ns: ['common', 'pages'],
    defaultNS: 'common',
  });

export default i18n;