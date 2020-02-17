import isNull from 'lodash/isNull';
import { shallowEqual, connectAdvanced } from 'react-redux';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';

import creator from '../../app/creator';
import api from '../api';

import Users from './main';

const UsersRedux = connectAdvanced((dispatch) => {
  const module = 'system';
  let ownProps = {};
  let result = {};

  const sendTo = creator(api, module, dispatch);

  const modelCurrentUser = () => sendTo('userCurrent');

  const modelItems = (data) => sendTo('userItems', data);
  const modelHeader = (data) => sendTo('userHeader', data);

  const modelAdd = (data) => sendTo('userAdd', data, (json) => {
    modelItems({});// ownProps.location.query
    return json;
  });

  /**
   * User delete
   * @param id
   */
  const modelDelete = (id) => sendTo('userDelete', { id }, (json) => {
    modelItems({});// ownProps.location.query
    return json;
  });

  /**
   * Downloading data from a remote server
   * @private
   */
  const modelServer = () => {
    modelHeader({});// ownProps.location.query
    modelItems({});// ownProps.location.query
  };

  const addParamUrl = (name, value) => {
    const parsed = queryString.parse(ownProps.location.search);

    console.log('addParamUrl', name, value);

    if (value) {
      parsed[name] = value;
    } else {
      delete parsed[name];
    }

    const stringified = queryString.stringify(parsed);

    console.log('parsed', parsed);

    const location = {
      pathname: '/',
      search: stringified,
      state: parsed,
    };

    ownProps.history.push(location);

    return parsed;
  };

  const setHeader = (name, value) => {
    const parsed = addParamUrl(name, value);

    modelHeader(parsed);
  };

  const sort = (setSort) => {
    // ownProps.location.query.sort = setSort;
    modelItems({});// ownProps.location.query
  };

  return (nextState, nextOwnProps) => {
    const query = queryString.parse(nextOwnProps.location.search);

    console.log('query', query);

    const loading = isNull(nextState[module].userItems);

    const header = isNull(nextState[module].userItems)
      ? {}
      : nextState[module].userHeader;

    const items = isNull(nextState[module].userItems)
      ? null
      : nextState[module].userItems.data;

    const paginate = isNull(nextState[module].userItems)
      ? null
      : nextState[module].userItems.paginate;

    const access = isNull(nextState[module].userItems)
      ? {}
      : nextState[module].userItems.access;

    const current = isNull(nextState[module].userCurrent)
      ? {}
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

export default withRouter(UsersRedux);
