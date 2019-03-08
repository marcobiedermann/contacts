import { connectRouter } from 'connected-react-router';
import { firebaseReducer } from 'react-redux-firebase';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import contacts from './contacts';

const reducers = history => combineReducers({
  contacts,
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  router: connectRouter(history),
});

export default reducers;
