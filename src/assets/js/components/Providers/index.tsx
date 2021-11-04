import React, { Suspense } from 'react';
import { FirebaseAppProvider } from 'reactfire';
import config from '../../constants/config';
import Loader from '../Loader';

export interface ProvidersProps {
  children: React.ReactNode;
}

function Providers(props: ProvidersProps): JSX.Element {
  return (
    <FirebaseAppProvider firebaseConfig={config.firebase} suspense>
      <Suspense fallback={<Loader />} {...props} />
    </FirebaseAppProvider>
  );
}

export default Providers;
