import { createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import middleware from '../middleware';
import reducers from '../reducers';
import history from './history';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers(history));

const store = createStore(persistedReducer, middleware);

const persistor = persistStore(store);

export default store;
export { persistor };
