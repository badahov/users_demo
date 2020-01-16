'use strict';

import {combineReducers} from 'redux';

function ucFirst(str) {
  if (!str) return str;

  return str[0].toUpperCase() + str.slice(1);
}

const module = {
  name: 'system',
  models: [
    {
      name: 'user',
      points: ['header', 'items', 'current', 'add']
    },
  ]
};

const actionReducers = status => (state = null, action) => {
  if (status.includes(action.type)) {
    return action.data;
  } else {
    return state;
  }
};

const reducers = {};
module.models.map(item => {
  item.points.map(point => {
    let method = `${item.name}${ucFirst(point)}`;

    let action = `${module.name}_${item.name}${point}`.toUpperCase();
    reducers[method] = actionReducers([action]);
  });
});

export default combineReducers(reducers);
