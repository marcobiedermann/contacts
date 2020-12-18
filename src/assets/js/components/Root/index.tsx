import React, { FC, Suspense } from 'react';
import { FirebaseAppProvider } from 'reactfire';
import routes from '../../constants/routes';
import firebaseConfig from '../../firebase';
import Loader from '../Loader';
import Router from '../Router';

const Root: FC = () => (
  <FirebaseAppProvider firebaseConfig={firebaseConfig}>
    <Suspense fallback={<Loader />}>
      <Router routes={routes} />
    </Suspense>
  </FirebaseAppProvider>
);

export default Root;
