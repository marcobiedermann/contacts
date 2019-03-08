import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux';
import contacts from './contacts';


const reducers = history => combineReducers({
  contacts,
  router: connectRouter(history),
});

export default reducers;
