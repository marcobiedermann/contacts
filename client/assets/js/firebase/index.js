import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const fbConfig = {
  apiKey: 'AIzaSyACCKsSpclO2wFOA4AwjNx4IPMjJAEsiOY',
  authDomain: 'contacts-27c78.firebaseapp.com',
  databaseURL: 'https://contacts-27c78.firebaseio.com',
  projectId: 'contacts-27c78',
  storageBucket: 'contacts-27c78.appspot.com',
  messagingSenderId: '131106526511',
};

firebase.initializeApp(fbConfig);

export default firebase;
