import apiAuthLogin from '../api';

export default function authLogin(query) {
  return {
    type: 'AUTH_LOGIN',
    actions: ['AUTH_LOGIN_LOADING', 'AUTH_LOGIN_LOADED', 'AUTH_LOGIN_LOAD_FAILURE'],
    promise: apiAuthLogin(query),
  };
}
