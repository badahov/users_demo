'use strict';

import {combineForms} from 'react-redux-form';


const loadingReducers = (state = [], action) => {
    switch(action.type) {
        case 'USER_ITEMS_LOADING':
        case 'USER_DELETE_LOADING':
            return action.data;
        default:
            return state;
    }
};

const itemsReducers = (state = [], action) => {
    switch(action.type) {
        case 'USER_ITEMS_LOADED':
            return action.data;
        default:
            return state;
    }
};

const saveReducers = (state = [], action) => {
    switch(action.type) {
        case 'USER_ADD_LOADED':
            return action.data;
        default:
            return state;
    }
};

const headerReducers = (state = [], action) => {
    switch(action.type) {
        case 'USER_HEADER_LOADED':
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

export default combineForms({
    loading:  loadingReducers,
    items:   itemsReducers,
    save:    saveReducers,
    header:  headerReducers,
    current: currentReducers
}, 'user');
