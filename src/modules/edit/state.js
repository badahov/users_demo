'use strict';

import { createStore, combineReducers, applyMiddleware } from 'redux';

import middleware from '../app/middleware';
import reducer from '../app/reducer';

import thunk from 'redux-thunk';
// import {createLogger} from 'redux-logger';

const module = {
  name: 'system',
  models: [
    {
      name: 'user',
      points: ['item', 'current']
    }
  ]
};

const createStoreWithMiddleware = applyMiddleware(
  middleware('system'),
  thunk,
  // createLogger({collapsed:true}),
)(createStore);

export default createStoreWithMiddleware(combineReducers({
  system: reducer(module)
}));
