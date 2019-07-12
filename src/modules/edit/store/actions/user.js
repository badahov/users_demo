'use strict';

import {modelUser, modelEdit, modelCurrentUser} from '../api/user';
import config from "../../../users/config";

const MODEL = config.model.toUpperCase();

export function userItem(query) {
    return {
        type: `${MODEL}_ITEM`,
        actions: [`${MODEL}_ITEM_LOADING`, `${MODEL}_ITEM_LOADED`, `${MODEL}_ITEM_LOAD_FAILURE`],
        promise: modelUser(query),
    };
}

export function userCurrent() {
    return {
        type: `${MODEL}_CURRENT`,
        actions: [`${MODEL}_CURRENT_LOADING`, `${MODEL}_CURRENT_LOADED`, `${MODEL}_CURRENT_LOAD_FAILURE`],
        promise: modelCurrentUser(),
    };
}

export function userEdit(data, filter = null, action = null) {
    return {
        type: `${MODEL}_EDIT`,
        actions: [`${MODEL}_EDIT_LOADED`],
        model: modelEdit(data, filter, action),
    };
}
