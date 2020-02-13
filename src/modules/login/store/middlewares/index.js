const middleware = (store) => (next) => (action) => {
  if (action.type === 'AUTH_LOGIN') {
    const [startAction, authOk] = action.actions;

    store.dispatch({
      type: startAction,
    });

    action.promise.onload = function onload() {
      const result = JSON.parse(action.promise.response);

      if (action.promise.status === 200) {
        if (result.status !== 'error') {
          store.dispatch({
            type: authOk,
            data: action.promise.status,
          });
        } else {
          store.dispatch({
            type: authOk,
            data: 401,
          });
        }
      } else {
        store.dispatch({
          type: authOk,
          data: action.promise.status,
        });
      }

      return null;
    };

    action.promise.onerror = function onerror() {
      store.dispatch({
        type: authOk,
        data: 500,
      });
    };
  } else {
    return next(action);
  }

  return null;
};

export default middleware;
