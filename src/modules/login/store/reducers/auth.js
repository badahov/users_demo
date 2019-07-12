'use strict';

import {combineForms} from 'react-redux-form';

const actionReducers = status => (state = [], action) => {
    if (status.includes(action.type)) {
        return action.data;
    } else {
        return state;
    }
};

export default combineForms({
    current: actionReducers([
        'AUTH_CURRENT_USER_LOADED'
    ]),
    forgot: actionReducers([
        'AUTH_AUTH_FORGOT_PASSWORD_LOADED'
    ]),
}, 'auth');
