import { shallowEqual } from 'react-redux';
import { connectAdvanced } from 'react-redux';

import creator from '../../app/creator';
import api from '../api';

import Users from './main';

export default connectAdvanced((dispatch) => {
  const module = 'system';
  let ownProps = {};
  let result = {};

  const sendTo = creator(api, module, dispatch);

  const modelCurrentUser = () => sendTo('userCurrent');

  const modelRoleItems = () => sendTo('roleItems');

  const modelPermissionItem = (data) => sendTo('permissionItem', data);
  const modelPermissionSwitch = (data) => sendTo('permissionSwitch', data);

  const modelRoleAdd = (data) => sendTo('roleAdd', data, (json) => {
    //modelItem(ownProps.location.query);
    return json;
  });

  const modelRoleEdit = (data) => sendTo('roleEdit', data, (json) => {
    //modelItem(ownProps.location.query);
    return json;
  });

  const modelRoleDelete = (data) => sendTo('roleDelete', data, (json) => {
    //modelItem(ownProps.location.query);
    return json;
  });

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

    const loading    = isNull(nextState[module].userCurrent) ? true : false;
    const role       = isNull(nextState[module].roleItems) ? null : nextState[module].roleItems;
    const permission = isNull(nextState[module].permissionItem) ? null : nextState[module].permissionItem;
    const access     = isNull(nextState[module].userCurrent) ? null : nextState[module].userCurrent.access;
    const current    = isNull(nextState[module].userCurrent) ? null : nextState[module].userCurrent.data;

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
    ownProps = nextOwnProps;
    if (!shallowEqual(result, nextResult)) {
      result = nextResult
    }

    return result;
  }
})(Users);
