import React, { FC } from 'react';
import { FirebaseAppProvider } from 'reactfire';
import config from '../../constants/config';

const Providers: FC = (props) => <FirebaseAppProvider firebaseConfig={config.firebase} suspense {...props} />;

export default Providers;
