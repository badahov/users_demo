'use strict';

import middlewareAction from './middleware';
import toUpper from 'lodash/toUpper';

const middleware = model => store => next => action => {
    if (toUpper(model) === toUpper(action.type)) {
        middlewareAction(store, action);
    } else {
        return next(action);
    }
};

export default middleware;
