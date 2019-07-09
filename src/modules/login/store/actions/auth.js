'use strict';

import {apiAuthLogin, apiAuthLoginDefault, apiAuthCurrentUser, apiAuthLoginforgotPass} from '../api/auth';

export function authLoginDefault() {
    return {
       type: 'AUTH_LOGIN_DEFAULT',
       actions: ['AUTH_LOGIN_DEFAULT_LOADING'],
       promise: apiAuthLoginDefault(),
    };
}

export function authLogin( query ) {
    return {
       type: 'AUTH_LOGIN',
       actions: ['AUTH_LOGIN_LOADING', 'AUTH_LOGIN_LOADED', 'AUTH_LOGIN_LOAD_FAILURE'],
       promise: apiAuthLogin( query ),
    };
}

export function authCurrentUser() {
    return {
       type: 'AUTH_CURRENT_USER',
       actions: ['AUTH_CURRENT_USER_LOADING', 'AUTH_CURRENT_USER_LOADED', 'AUTH_CURRENT_USER_LOAD_FAILURE'],
       promise: apiAuthCurrentUser(),
    };
}


export function authForgotPass( query ) {
    return {
       type: 'AUTH_FORGOT_PASSWORD',
       actions: ['AUTH_FORGOT_PASSWORD_LOADING', 'AUTH_FORGOT_PASSWORD_LOADED', 'AUTH_FORGOT_PASSWORD_LOAD_FAILURE'],
       promise: apiAuthLoginforgotPass( query ),
    };
}
