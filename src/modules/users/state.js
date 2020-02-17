import { createStore, combineReducers, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';

import middleware from '../app/middleware';
import reducer from '../app/reducer';

// import {createLogger} from 'redux-logger';

const module = {
  name: 'system',
  models: [
    {
      name: 'user',
      points: ['header', 'items', 'current'],
    },
  ],
};

const createStoreWithMiddleware = applyMiddleware(
  middleware('system'),
  thunk,
  // createLogger({collapsed:true}),
)(createStore);

export default createStoreWithMiddleware(combineReducers({
  system: reducer(module),
}));
