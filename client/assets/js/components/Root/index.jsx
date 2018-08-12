import React from 'react';
import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux';
import Router from '../Router';
import i18n from '../../i18n';
import store from '../../store';

const Root = () => (
  <Provider store={store}>
    <I18nextProvider i18n={i18n}>
      <Router />
    </I18nextProvider>
  </Provider>
);

export default Root;
