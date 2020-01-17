import { bindActionCreators } from 'redux';

import action from './action';

/**
 *
 * @param api function
 * @param module string
 * @param dispatch object
 * @returns {function(*=, *=, *=): {promise: *, type: *, actions: [string]}}
 */
export default function creator(api, module, dispatch) {
  const sendTo = bindActionCreators({action}, dispatch).action;

  return (action, data, callback) => sendTo(api, module, action, data, callback);
}
