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

  const modelCurrentUser = () => actions.model('userCurrent');

  const modelItems  = (data) => actions.model('userItems', data);
  const modelHeader = (data) => actions.model('userHeader', data);

  const modelAdd = (data) => actions.model('userAdd', data, (json) => {
    modelItems(ownProps.location.query);
    return json;
  });

  /**
   * User delete
   * @param id
   */
  const modelDelete = (id) => actions.model('userDelete', {id: id}, (json) => {
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

    const loading  = isNull(nextState.system.userItems) ? true : false;
    const header   = isNull(nextState.system.userItems) ? []   : nextState.system.userHeader;
    const items    = isNull(nextState.system.userItems) ? null : nextState.system.userItems.data;
    const paginate = isNull(nextState.system.userItems) ? null : nextState.system.userItems.paginate;
    const access   = isNull(nextState.system.userItems) ? null : nextState.system.userItems.access;
    const current  = isNull(nextState.system.userCurrent) ? null : nextState.system.userCurrent.data;

    const nextResult = {
      ...nextOwnProps,
      loading,
      header,
      items,
      paginate,
      access,
      current,
      actionUser,
      setHeader,
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
