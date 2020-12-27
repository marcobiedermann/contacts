import { name, version } from '../../../../package.json';

const { FIREBASE_API_KEY, NODE_ENV } = process.env;

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
    apiKey: FIREBASE_API_KEY,
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
