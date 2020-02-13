import { combineReducers } from 'redux';
import includes from 'lodash/includes';

const actionReducers = (status) => (state = null, action) => {
  if (includes(status, action.type)) {
    return action.data;
  }

  return state;
};

export default combineReducers({
  status: actionReducers([
    'AUTH_LOGIN_LOADED',
  ]),
  current: actionReducers([
    'AUTH_CURRENT_USER_LOADED',
  ]),
  forgot: actionReducers([
    'AUTH_AUTH_FORGOT_PASSWORD_LOADED',
  ]),
});
