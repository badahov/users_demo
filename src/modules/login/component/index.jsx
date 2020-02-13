import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import isNull from 'lodash/isNull';

import { message, notification } from 'antd';

import authLogin from '../store/actions';

import Login from './main';

const LoginRedux = connect(
  (state, props) => {
    if (!isNull(state.auth.status)) {
      if (state.auth.status === 200) {
        message.success('Welcome!');

        props.history.push('/');
      } else {
        notification.error({
          message: 'Ошибка логина или пароля',
        });
      }
    }

    return {
      login: state.auth.login,
    };
  },
  (dispatch) => bindActionCreators({ authLogin }, dispatch),
)(Login);

export default withRouter(LoginRedux);
