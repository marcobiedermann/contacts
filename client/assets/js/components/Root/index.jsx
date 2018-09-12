import React from 'react';
import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Router from '../Router';
import i18n from '../../i18n';
import store, { persistor } from '../../store';

const Root = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <I18nextProvider i18n={i18n}>
        <Router />
      </I18nextProvider>
    </PersistGate>
  </Provider>
);

export default Root;
