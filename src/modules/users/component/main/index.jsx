import { bindActionCreators } from 'redux';
import { shallowEqual } from 'react-redux';
import { connectAdvanced } from 'react-redux';

import model from '../../store/actions/user';

import Users from './main';

export default connectAdvanced((dispatch) => {
  let ownProps = {};
  let result = {};

  const actions = bindActionCreators({model}, dispatch);

  const actionUser = (action, data, callback) => actions.model(action, data, callback);

  const modelCurrentUser = () => actions.model('current');

  const modelItems  = (data) => actions.model('items', data);
  const modelHeader = (data) => actions.model('header', data);

  const modelAdd = (data) => actions.model('add', data, (json) => {
    modelItems(ownProps.location.query);
    return json;
  });

  /**
   * User delete
   * @param id
   */
  const modelDelete = (id) => actions.model('delete', {id: id}, (json) => {
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

  const sort = (sort) => {
    ownProps.location.query.sort = sort;
    modelItems(ownProps.location.query);
  };

  return (nextState, nextOwnProps) => {
    const isNull = (value) => value === null;

    const loading  = isNull(nextState.user.items) ? true : false;
    const header   = isNull(nextState.user.items) ? [] : nextState.user.header;
    const items    = isNull(nextState.user.items) ? null : nextState.user.items.data;
    const paginate = isNull(nextState.user.items) ? null : nextState.user.items.paginate;
    const access   = isNull(nextState.user.items) ? null : nextState.user.items.access;
    const current  = isNull(nextState.user.items) ? null : nextState.user.current;

    const nextResult = {
      ...nextOwnProps,
      loading,
      header,
      items,
      paginate,
      access,
      current,
      actionUser,
      modelCurrentUser,
      modelItems,
      modelHeader,
      modelServer,
      modelAdd,
      modelDelete,
      sort
    };
    ownProps = nextOwnProps;
    if (!shallowEqual(result, nextResult)) {
      result = nextResult
    }

    return result;
  }
})(Users);
