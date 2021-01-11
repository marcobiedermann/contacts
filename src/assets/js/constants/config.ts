import { name, version } from '../../../../package.json';

const { NODE_ENV } = process.env;

interface Config {
  environment: string;
  firebase: {
    [key: string]: string | undefined;
  };
  name: string;
  version: string;
}

const config: Config = {
  environment: NODE_ENV || 'development',
  firebase: {
    apiKey: process.env.FIREBASE_API_KEY,
    appId: '1:131106526511:web:8603a3c9e0b29bc1297dda',
    authDomain: 'contacts-27c78.firebaseapp.com',
    databaseURL: 'https://contacts-27c78.firebaseio.com',
    messagingSenderId: '131106526511',
    projectId: 'contacts-27c78',
    storageBucket: 'contacts-27c78.appspot.com',
  },
  name,
  version,
};

export default config;
