'use strict';

import {combineReducers} from 'redux';

const actionReducers = (state = [], action) => {
    switch(action.type) {
        case 'USER_ITEM_LOADING':
            return action.data;
        default:
            return state;
    }
};

const userReducers = (state = [], action) => {
    switch(action.type) {
        case 'USER_ITEM_LOADED':
            return action.data;
        default:
            return state;
    }
};

const currentReducers = (state = [], action) => {
    switch(action.type) {
        case 'USER_CURRENT_LOADED':
            return action.data;
        default:
            return state;
    }
};

export default combineReducers({
    action:  actionReducers,
    current: currentReducers,
    item:    userReducers
});
