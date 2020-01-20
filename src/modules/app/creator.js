import { bindActionCreators } from 'redux';

import actions from './action';

/**
 *
 * @param api function
 * @param module string
 * @param dispatch object
 * @returns {function(*=, *=, *=): {promise: *, type: *, actions: [string]}}
 */
export default function creator(api, module, dispatch) {
  const sendTo = bindActionCreators({ actions }, dispatch).actions;

  return (action, data, callback) => sendTo(api, module, action, data, callback);
}
