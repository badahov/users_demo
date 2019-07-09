'use strict';

import {modelEdit, modelCurrentUser} from '../api/user';

export function userCurrent() {
    return {
        type: 'USER_CURRENT',
        actions: ['USER_CURRENT_LOADING', 'USER_CURRENT_LOADED', 'USER_CURRENT_LOAD_FAILURE'],
        promise: modelCurrentUser(),
    };
}

export function userEdit(data, filter = null, action = null) {
    return {
        type: 'USER_EDIT',
        actions: ['USER_EDIT_LOADED'],
        model: modelEdit(data, filter, action),
    };
}
