'use strict';

import middlewareAction from 'modules/app/component/core/middleware';

import config from '../../config';

const middleware = store => next => action => {
    if (config.middleware.includes(action.type)) {
        middlewareAction(store, action);
    } else {
        return next(action);
    }
};

export default middleware;
