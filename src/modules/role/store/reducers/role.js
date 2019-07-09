'use strict';

import {combineReducers} from 'redux';

const permissionReducers = (state = [], action) => {
    switch(action.type) {
        case 'PERMISSION_LOADED':
            return action.data;
        default:
            return state;
    }
};

const roleReducers = (state = [], action) => {
    switch(action.type) {
        case 'ROLE_LOADED':
            return action.data;
        default:
            return state;
    }
};

export default combineReducers({
    role: roleReducers,
    permission: permissionReducers,
});
