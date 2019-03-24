import { routerMiddleware } from 'connected-react-router';
import { applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import history from '../store/history';

const middleware = composeWithDevTools(applyMiddleware(routerMiddleware(history)));

export default middleware;