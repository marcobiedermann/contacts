import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {

};

firebase.initializeApp(config);

const auth = firebase.auth();
const database = firebase.database();

export {
  auth,
  database,
};
