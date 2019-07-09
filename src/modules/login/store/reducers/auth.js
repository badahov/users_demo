'use strict';

import {combineForms} from 'react-redux-form';

const defaultReducers = (state = [], action) => {
    switch (action.type) {
        case 'AUTH_LOGIN_DEFAULT_LOADING':
            return action.data;
        default:
            return state;
    }
};

const currentReducers = (state = [], action) => {
    switch (action.type) {
        case 'AUTH_CURRENT_USER_LOADED':
            return action.data;
        default:
            return state;
    }
};

const forgotReducers = (state = [], action) => {
    switch (action.type) {
        case 'AUTH_AUTH_FORGOT_PASSWORD_LOADED':
            return action.data;
        default:
            return state;
    }
};

export default combineForms({
    login: defaultReducers,
    current: currentReducers,
    forgot: forgotReducers,
}, 'auth');
