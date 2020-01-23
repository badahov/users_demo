import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import authLogin from '../store/actions';

import Login from './main';

export default connect(
  (state) => (
    {
      login: state.auth.login,
    }
  ),
  (dispatch) => bindActionCreators({ authLogin, dispatch }, dispatch),
)(Login);
