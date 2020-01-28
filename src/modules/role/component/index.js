import { shallowEqual, connectAdvanced } from 'react-redux';

import creator from '../../app/creator';
import api from '../api';

import Users from './main';

export default connectAdvanced((dispatch) => {
  const module = 'system';
  // let ownProps = {};
  let result = {};

  const sendTo = creator(api, module, dispatch);

  const modelCurrentUser = () => sendTo('userCurrent');

  const modelRoleItems = () => sendTo('roleItems');

  const modelPermissionItem = (data) => sendTo('permissionItem', data);
  const modelPermissionSwitch = (data, afterAction) => sendTo('permissionSwitch', data, afterAction);

  const modelRoleAdd = (data) => sendTo('roleAdd', data, (json) => json);

  const modelRoleEdit = (data, afterAction) => sendTo('roleEdit', data, afterAction);

  const modelRoleDelete = (data) => sendTo('roleDelete', data, (json) => json);

  /**
   * Downloading data from a remote server
   * @private
   */
  const modelServer = () => {
    modelCurrentUser();
    modelRoleItems();
    modelPermissionItem({ id: 0 });
  };

  return (nextState, nextOwnProps) => {
    const isNull = (value) => value === null;

    const loading = isNull(nextState[module].userCurrent);

    const role = isNull(nextState[module].roleItems)
      ? null
      : nextState[module].roleItems;

    const permission = isNull(nextState[module].permissionItem)
      ? null
      : nextState[module].permissionItem;

    const access = isNull(nextState[module].userCurrent)
      ? {}
      : nextState[module].userCurrent.access;

    const current = isNull(nextState[module].userCurrent)
      ? {}
      : nextState[module].userCurrent.data;

    const nextResult = {
      ...nextOwnProps,
      loading,
      permission,
      role,
      access,
      current,
      modelServer,
      modelRoleItems,
      modelPermissionItem,
      modelPermissionSwitch,
      modelRoleDelete,
      modelRoleEdit,
      modelRoleAdd,
    };
    // ownProps = nextOwnProps;
    if (!shallowEqual(result, nextResult)) {
      result = nextResult;
    }

    return result;
  };
})(Users);
