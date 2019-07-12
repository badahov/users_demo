'use strict';

import {combineReducers} from 'redux';
import config from "../../../users/config";

const MODEL = config.model.toUpperCase();

const actionReducers = status => (state = [], action) => {
    if (status.includes(action.type)) {
        return action.data;
    } else {
        return state;
    }
};

export default combineReducers({
    action: actionReducers([
        `${MODEL}_ITEM_LOADING`,
    ]),
    current: actionReducers([
        `${MODEL}_CURRENT_LOADED`,
    ]),
    item: actionReducers([
        `${MODEL}_ITEM_LOADED`,
    ])
});
