import { connectAdvanced, shallowEqual } from 'react-redux';

import creator from '../../app/creator';
import api from '../api';

import Users from './main';

export default connectAdvanced((dispatch) => {
  const module = 'system';
  let ownProps = {};
  let result = {};

  const sendTo = creator(api, module, dispatch);

  const modelCurrentUser = () => sendTo('userCurrent');

  const modelItem = (data) => sendTo('userItem', data);

  const modelEdit = (data) => sendTo('userEdit', data, (json) => {
    modelItem(ownProps.location.query);
    return json;
  });

  /**
   * Downloading data from a remote server
   * @private
   */
  const modelServer = () => {
    modelCurrentUser();
    modelItem({ id: ownProps.params.userId });
  };

  return (nextState, nextOwnProps) => {
    const isNull = (value) => value === null;

    const loading = isNull(nextState[module].userItem);
    const item = isNull(nextState[module].userItem)
      ? null
      : nextState[module].userItem.data;
    const access = isNull(nextState[module].userItem)
      ? null
      : nextState[module].userItem.access;
    const current = isNull(nextState[module].userCurrent)
      ? null
      : nextState[module].userCurrent.data;

    const nextResult = {
      ...nextOwnProps,
      loading,
      item,
      access,
      current,
      modelEdit,
      modelServer,
    };
    ownProps = nextOwnProps;
    if (!shallowEqual(result, nextResult)) {
      result = nextResult;
    }

    return result;
  };
})(Users);
