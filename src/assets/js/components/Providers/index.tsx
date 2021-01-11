import React, { FC } from 'react';
import { FirebaseAppProvider } from 'reactfire';
import config from '../../constants/config';

const Providers: FC = (props) => <FirebaseAppProvider firebaseConfig={config.firebase} {...props} />;

export default Providers;
