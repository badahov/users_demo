import toUpper from 'lodash/toUpper';
import middlewareAction from './middleware';

const middleware = (model) => (store) => (next) => (action) => {
  if (toUpper(model) === toUpper(action.type)) {
    return middlewareAction(store, action);
  }

  return next(action);
};

export default middleware;
