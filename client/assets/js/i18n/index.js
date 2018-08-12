import i18n from 'i18next';
import commonDe from './de/common.json';
import commonEn from './en/common.json';
import pagesDe from './de/pages.json';
import pagesEn from './en/pages.json';

i18n.init({
  debug: true,
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
  resources: {
    de: {
      common: commonDe,
      pages: pagesDe,
    },
    en: {
      common: commonEn,
      pages: pagesEn,
    },
  },
});

export default i18n;
