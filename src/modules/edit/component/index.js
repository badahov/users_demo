import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  userEdit as actionEdit,
  userCurrent as actionCurrent,
  userItem as actionUser,
} from '../store/actions/user';

import Edit from './main';

export default connect(
  (state) => {
    return {
      access: state.user.access,
      action: state.user.action,
      current: state.user.current,
      item: state.user.item.data,
    };
  },
  (dispatch) => bindActionCreators({ actionCurrent, actionUser, actionEdit, dispatch }, dispatch),
)(Edit);
