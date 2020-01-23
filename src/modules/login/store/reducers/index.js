import { combineReducers } from 'redux';
import includes from 'lodash/includes';

const actionReducers = (status) => (state = [], action) => {
  if (includes(status, action.type)) {
    return action.data;
  }

  return state;
};

export default combineReducers({
  current: actionReducers([
    'AUTH_CURRENT_USER_LOADED',
  ]),
  forgot: actionReducers([
    'AUTH_AUTH_FORGOT_PASSWORD_LOADED',
  ]),
});
