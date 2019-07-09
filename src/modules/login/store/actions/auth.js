'use strict';

import {apiAuthLogin} from '../api/auth';

export function authLogin(query) {
    return {
       type: 'AUTH_LOGIN',
       actions: ['AUTH_LOGIN_LOADING', 'AUTH_LOGIN_LOADED', 'AUTH_LOGIN_LOAD_FAILURE'],
       promise: apiAuthLogin(query),
    };
}
