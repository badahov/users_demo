'use strict';

import middlewareAction from '../middleware';

const MODEL = 'system'.toUpperCase();

const middleware = store => next => action => {
  if (MODEL === action.type.toUpperCase()) {
    middlewareAction(store, action);
  } else {
    return next(action);
  }
};

export default middleware;
