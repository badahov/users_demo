'use strict';

//import {combineForms} from 'react-redux-form';
import { combineReducers } from 'redux';

const actionReducers = status => (state = [], action) => {
    if (status.includes(action.type)) {
        return action.data;
    } else {
        return state;
    }
};

export default combineReducers({
    current: actionReducers([
        'AUTH_CURRENT_USER_LOADED'
    ]),
    forgot: actionReducers([
        'AUTH_AUTH_FORGOT_PASSWORD_LOADED'
    ]),
});
