import isNull from 'lodash/isNull';
import { shallowEqual, connectAdvanced } from 'react-redux';

import creator from '../../app/creator';
import api from '../api';

import Users from './main';

export default connectAdvanced((dispatch) => {
  const module = 'system';
  let ownProps = {};
  let result = {};

  const sendTo = creator(api, module, dispatch);

  const modelCurrentUser = () => sendTo('userCurrent');

  const modelItems = (data) => sendTo('userItems', data);
  const modelHeader = (data) => sendTo('userHeader', data);

  const modelAdd = (data) => sendTo('userAdd', data, (json) => {
    modelItems(ownProps.location.query);
    return json;
  });

  /**
   * User delete
   * @param id
   */
  const modelDelete = (id) => sendTo('userDelete', { id }, (json) => {
    modelItems(ownProps.location.query);
    return json;
  });

  /**
   * Downloading data from a remote server
   * @private
   */
  const modelServer = () => {
    modelHeader(ownProps.location.query);
    modelItems(ownProps.location.query);
  };

  const setHeader = (name, value) => {
    ownProps.location.query[name] = value;
    modelHeader(ownProps.location.query);
  };

  const sort = (setSort) => {
    ownProps.location.query.sort = setSort;
    modelItems(ownProps.location.query);
  };

  return (nextState, nextOwnProps) => {
    const loading = isNull(nextState[module].userItems);

    const header = isNull(nextState[module].userItems)
      ? []
      : nextState[module].userHeader;
    const items = isNull(nextState[module].userItems)
      ? null
      : nextState[module].userItems.data;
    const paginate = isNull(nextState[module].userItems)
      ? null
      : nextState[module].userItems.paginate;
    const access = isNull(nextState[module].userItems)
      ? null
      : nextState[module].userItems.access;
    const current = isNull(nextState[module].userCurrent)
      ? null
      : nextState[module].userCurrent.data;

    const nextResult = {
      ...nextOwnProps,
      loading,
      header,
      items,
      paginate,
      access,
      current,
      setHeader,
      modelCurrentUser,
      modelItems,
      modelHeader,
      modelServer,
      modelAdd,
      modelDelete,
      sort,
    };
    ownProps = nextOwnProps;
    if (!shallowEqual(result, nextResult)) {
      result = nextResult;
    }

    return result;
  };
})(Users);
