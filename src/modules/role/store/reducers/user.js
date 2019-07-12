'use strict';

import {combineReducers} from 'redux';

const MODEL = 'USER';

const actionReducers = status => (state = [], action) => {
    if (status.includes(action.type)) {
        return action.data;
    } else {
        return state;
    }
};

export default combineReducers({
    action: actionReducers([
        `${MODEL}_ITEM_LOADING`
    ]),
    current: actionReducers([
        `${MODEL}_CURRENT_LOADED`
    ]),
    item: actionReducers([
        `${MODEL}_ITEM_LOADED`
    ])
});
