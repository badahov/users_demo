'use strict';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// import {createLogger} from 'redux-logger';

import user from './middlewares/user';

//Найдет и загрузит все reducers из папки
import * as reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(
  user,
  thunk,
  // createLogger({collapsed:true})
)(createStore);

export default createStoreWithMiddleware(combineReducers(reducers));
