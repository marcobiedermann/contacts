/* eslint-disable prefer-destructuring */
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const FIREBASE_API_KEY = process.env.FIREBASE_API_KEY;

const fbConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: 'contacts-27c78.firebaseapp.com',
  databaseURL: 'https://contacts-27c78.firebaseio.com',
  projectId: 'contacts-27c78',
  storageBucket: 'contacts-27c78.appspot.com',
  messagingSenderId: '131106526511',
};

firebase.initializeApp(fbConfig);

export default firebase;