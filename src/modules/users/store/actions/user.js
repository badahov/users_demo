'use strict';

import {modelUser} from '../api/user';

export function user(action, data, callback) {
    const actionKey = action.toUpperCase();

    return {
        type: 'USER_' + actionKey,
        actions: ['USER_' + actionKey + '_LOADING', 'USER_' + actionKey + '_LOADED', 'USER_' + actionKey + '_LOAD_FAILURE'],
        promise: modelUser(action, data, callback),
    };
}