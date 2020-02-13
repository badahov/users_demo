import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
// import { createLogger } from 'redux-logger';

import auth from './middlewares';

// Найдет и загрузит все reducers из папки
import authReducer from './reducers';

const middlewareAll = [
  auth,
  thunk,
  // createLogger({collapsed:true})
];

export default createStore(combineReducers({
  auth: authReducer,
}), composeWithDevTools(
  applyMiddleware(...middlewareAll),
));
