import React, { FC, Suspense } from 'react';
import { FirebaseAppProvider } from 'reactfire';
import config from '../../constants/config';
import Loader from '../Loader';

const Providers: FC = (props) => {
  const { children } = props;
  return (
    <FirebaseAppProvider firebaseConfig={config.firebase} suspense>
      <Suspense fallback={<Loader />}>{children}</Suspense>
    </FirebaseAppProvider>
  );
};

export default Providers;
