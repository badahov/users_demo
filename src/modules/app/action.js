import toUpper from 'lodash/toUpper';

export default function sendTo(api, model, action, data, callback) {
  return {
    type: model,
    actions: [`${model}_${toUpper(action)}`],
    promise: api(action, data, callback),
  };
}
