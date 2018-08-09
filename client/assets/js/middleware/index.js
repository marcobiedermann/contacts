import { routerMiddleware } from 'connected-react-router';
import { applyMiddleware } from 'redux';
import history from '../store/history';

const middleware = applyMiddleware(routerMiddleware(history));

export default middleware;
