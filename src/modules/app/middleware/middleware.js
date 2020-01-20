import toUpper from 'lodash/toUpper';

const middlewareAction = (store, action) => {
  const [point] = action.actions;

  if (action.promise.constructor.name === 'Promise') {
    action.promise.then((data) => {
      store.dispatch({
        type: toUpper(point),
        data,
      });

      return true;
    }, (error) => {
      store.dispatch({
        type: toUpper(point),
        error,
      });
    }).catch((criticalError) => {
      store.dispatch({
        type: toUpper(point),
        error: criticalError,
      });
    });
  } else {
    store.dispatch({
      type: toUpper(point),
      data: action.promise,
    });
  }

  return true;
};

export default middlewareAction;