'use strict';

import { modelUser } from '../api/user';

const MODEL = 'system';

export default function user (action, data, callback) {
  const actionKey = action.toUpperCase();

  return {
    type: MODEL,
    actions: [`${MODEL}_${actionKey}`],
    promise: modelUser(action, data, callback),
  };
}
