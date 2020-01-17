import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  userEdit as actionEdit,
  userCurrent as actionCurrent,
} from '../store/actions/user';

import { permission as actionPermission, role as actionRole } from '../store/actions/role';

import Roles from './main';

export default connect(
  (state) => {
    return {
      access: state.user.access,
      current: state.user.current,
      role: state.role.role,
      permission: state.role.permission,
    };
  },
  (dispatch) => bindActionCreators(
    { actionCurrent, actionEdit, actionPermission, actionRole, dispatch }, dispatch),
)(Roles);
