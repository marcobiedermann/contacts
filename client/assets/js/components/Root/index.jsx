import React, { Suspense } from 'react';
import { Provider } from 'react-redux';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { createFirestoreInstance } from 'redux-firestore';
import { PersistGate } from 'redux-persist/integration/react';
import firebase from '../../firebase';
import store, { persistor } from '../../store';
import Loader from '../Loader';
import Router from '../Router';

const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true,
};

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
};

const Root = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Suspense fallback={<Loader />}>
        <ReactReduxFirebaseProvider {...rrfProps}>
          <Router />
        </ReactReduxFirebaseProvider>
      </Suspense>
    </PersistGate>
  </Provider>
);

export default Root;
