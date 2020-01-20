import { combineReducers } from 'redux';
import toUpper from 'lodash/toUpper';

function ucFirst(str) {
  if (!str) return str;

  return toUpper(str[0]) + str.slice(1);
}

const actionReducers = (status) => (state = null, action) => {
  if (status.includes(action.type)) {
    return action.data;
  }

  return state;
};

const reducer = (module) => {
  const { models } = module;

  const reducers = {};
  for (let i = 0; i < models.length; i += 1) {
    const model = models[i];

    for (let a = 0; a < model.points.length; a += 1) {
      const point = model.points[a];

      const method = `${model.name}${ucFirst(point)}`;
      const action = toUpper(`${module.name}_${model.name}${point}`);

      reducers[method] = actionReducers([action]);
    }
  }

  return combineReducers(reducers);
};

export default reducer;
