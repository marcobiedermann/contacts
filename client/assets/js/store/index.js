import { connectRouter } from 'connected-react-router';
import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import history from './history';
import middleware from '../middleware';
import reducers from '../reducers';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = createStore(
  connectRouter(history)(persistedReducer),
  middleware,
);

const persistor = persistStore(store);

export default store;
export {
  persistor,
};
