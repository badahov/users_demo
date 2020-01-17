import toUpper from 'lodash/toUpper';

export default function action(api, model, action, data, callback) {
  return {
    type: model,
    actions: [`${model}_${toUpper(action)}`],
    promise: api(action, data, callback),
  };
}
