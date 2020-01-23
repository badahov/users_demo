import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// import createLogger from 'redux-logger';

import auth from './middlewares/auth';

// Найдет и загрузит все reducers из папки
import * as reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(
  auth,
  thunk,
  // createLogger()
)(createStore);

export default createStoreWithMiddleware(combineReducers(reducers));
