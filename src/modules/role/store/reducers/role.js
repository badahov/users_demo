'use strict';

import {combineReducers} from 'redux';

const actionReducers = status => (state = [], action) => {
    if (status.includes(action.type)) {
        return action.data;
    } else {
        return state;
    }
};

export default combineReducers({
    permission: actionReducers([
        'PERMISSION_LOADED'
    ]),
    role: actionReducers([
        'ROLE_LOADED'
    ]),
});
