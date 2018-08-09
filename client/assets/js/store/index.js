import { connectRouter } from 'connected-react-router';
import { createStore } from 'redux';
import history from './history';
import middleware from '../middleware';
import reducers from '../reducers';
import { loadState, saveState } from '../actions/localstorage';

const store = createStore(
  connectRouter(history)(reducers),
  loadState(),
  middleware,
);

store.subscribe((() => {
  const { contacts } = store.getState();

  saveState({
    contacts,
  });
}));

export default store;
