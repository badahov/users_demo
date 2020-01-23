import config from '../../../../config';

const middleware = (store) => (next) => (action) => {
  switch (action.type) {
    case 'AUTH_LOGIN': {
      const [startAction] = action.actions;

      store.dispatch({
        type: startAction,
      });

      action.promise.onload = function onload() {
        const result = JSON.parse(action.promise.response);

        switch (action.promise.status) {
          case 403:
            config.message.error(config.error[action.promise.status]);
            break;
          case 401:
            config.message.error(config.error[action.promise.status]);
            break;
          case 200:
            if (result.status !== 'error') {
              config.page.home();
            }
            break;
          default:
            return null;
        }

        return null;
      };

      action.promise.onerror = function onerror() {
        config.message.error('Error');
      };
      break;
    }
    case 'AUTH_CURRENT_USER': {
      const {
        actions: {
          startCurrentUserAction,
          successCurrentUserAction,
        },
      } = action;

      store.dispatch({
        type: startCurrentUserAction,
      });

      action.promise.onload = function onload() {
        const data = JSON.parse(action.promise.response);

        switch (action.promise.status) {
          case 403:
            config.message.error(config.error[action.promise.status]);
            break;
          case 401:
            config.message.error(config.error[action.promise.status]);
            break;
          case 200:
            if (data.status !== 'error') {
              store.dispatch({
                type: successCurrentUserAction,
                data: data.result,
              });
            }
            break;
          default:
            return null;
        }

        return null;
      };
      break;
    }
    default:
      return next(action);
  }

  return null;
};

export default middleware;
