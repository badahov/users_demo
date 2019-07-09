'use strict';

import {modelUser, modelEdit, modelCurrentUser} from '../api/user';

export function userItem(query) {
    return {
        type: 'USER_ITEM',
        actions: ['USER_ITEM_LOADING', 'USER_ITEM_LOADED', 'USER_ITEM_LOAD_FAILURE'],
        promise: modelUser(query),
    };
}

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
