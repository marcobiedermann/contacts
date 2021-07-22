import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';
import config from '../constants/config';
import { isDevelopment } from './environment';

i18n
  .use(HttpApi)
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    backend: {
      loadPath: 'data/locales/{{lng}}/{{ns}}.json',
    },
    debug: isDevelopment(config.environment),
    fallbackLng: 'en',
    load: 'languageOnly',
    interpolation: {
      escapeValue: false,
    },
    ns: ['common', 'pages'],
    defaultNS: 'common',
  });

export default i18n;
