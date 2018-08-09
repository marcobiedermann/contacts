import { connectRouter } from 'connected-react-router';
import { createStore } from 'redux';
import history from './history';
import middleware from '../middleware';
import reducers from '../reducers';

const store = createStore(connectRouter(history)(reducers), middleware);

export default store;
