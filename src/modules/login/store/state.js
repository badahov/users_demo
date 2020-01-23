import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// import createLogger from 'redux-logger';

import auth from './middlewares';

// Найдет и загрузит все reducers из папки
import authReducer from './reducers';

const createStoreWithMiddleware = applyMiddleware(
  auth,
  thunk,
  // createLogger()
)(createStore);

export default createStoreWithMiddleware(combineReducers({
  auth: authReducer,
}));
