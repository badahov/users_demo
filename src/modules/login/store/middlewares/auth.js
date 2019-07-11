'use strict';

import config from 'config';

const middleware = store => next => action => {
    switch( action.type )
    {
        case 'AUTH_LOGIN':
            const [startAction] = action.actions;

            store.dispatch({
                type: startAction
            });

            action.promise.onload = function() {
                let result = JSON.parse(this.responseText);

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
                }
            };

            action.promise.onerror = function() {
                config.message.error('Error');
            };
            break;
        case 'AUTH_CURRENT_USER':
            const [startCurrentUserAction, successCurrentUserAction] = action.actions;

            store.dispatch({
                type: startCurrentUserAction
            });

            action.promise.onload = function() {
                let data = JSON.parse(this.responseText);

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
                                data: data.result
                            });
                        }
                        break;
                }
            };
            break;
        default:
            return next(action);
            break;
    }

};

export default middleware;
