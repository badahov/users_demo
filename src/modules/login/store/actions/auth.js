'use strict';

import {apiAuthLogin, apiAuthLoginDefault} from '../api/auth';

export function authLoginDefault() {
    return {
       type: 'AUTH_LOGIN_DEFAULT',
       actions: ['AUTH_LOGIN_DEFAULT_LOADING'],
       promise: apiAuthLoginDefault(),
    };
}

export function authLogin(query) {
    return {
       type: 'AUTH_LOGIN',
       actions: ['AUTH_LOGIN_LOADING', 'AUTH_LOGIN_LOADED', 'AUTH_LOGIN_LOAD_FAILURE'],
       promise: apiAuthLogin(query),
    };
}
