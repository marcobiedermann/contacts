import React, { FC, Suspense } from 'react';
import { FirebaseAppProvider } from 'reactfire';
import config from '../../constants/config';
import routes from '../../constants/routes';
import Loader from '../Loader';
import Router from '../Router';

const Root: FC = () => (
  <FirebaseAppProvider firebaseConfig={config.firebase}>
    <Suspense fallback={<Loader />}>
      <Router routes={routes} />
    </Suspense>
  </FirebaseAppProvider>
);

export default Root;
