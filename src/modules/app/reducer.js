import {combineReducers} from 'redux';

function ucFirst(str) {
  if (!str) return str;

  return str[0].toUpperCase() + str.slice(1);
}

const actionReducers = status => (state = null, action) => {
  if (status.includes(action.type)) {
    return action.data;
  } else {
    return state;
  }
};

const reducer = (module) => {
  const {models} = module;

  const reducers = {};
  for (let i = 0; i < models.length; i += 1) {
    let model = models[i];

    for (let a = 0; a < model.points.length; a += 1) {
      let point = model.points[a];

      let method = `${model.name}${ucFirst(point)}`;
      let action = `${module.name}_${model.name}${point}`.toUpperCase();

      reducers[method] = actionReducers([action]);
    }
  }

  return combineReducers(reducers);
};

export default reducer;
