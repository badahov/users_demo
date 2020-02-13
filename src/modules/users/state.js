import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
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

const middlewareAll = [
  middleware('system'),
  thunk, // createLogger({collapsed:true})
];

export default createStore(combineReducers({
  system: reducer(module),
}), composeWithDevTools(
  applyMiddleware(...middlewareAll),
));
