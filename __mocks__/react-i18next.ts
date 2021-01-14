import { getDefaults, getI18n, I18nextProvider, initReactI18next, setDefaults, setI18n } from 'react-i18next';

module.exports = {
  useTranslation: () => ({
    t: (key: string) => key,
    i18n: {},
  }),

  I18nextProvider,
  initReactI18next,
  setDefaults,
  getDefaults,
  setI18n,
  getI18n,
};
