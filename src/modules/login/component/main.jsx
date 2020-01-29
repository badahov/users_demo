import React from 'react';
import PropTypes from 'prop-types';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import { Layout, Row, Col } from 'antd';

import LoginForm from './form';

const { Content } = Layout;

const helmetContext = {};

const Login = (props) => {
  const {
    authLogin,
  } = props;

  return (
    <HelmetProvider context={helmetContext}>
      <Layout className="auth">
        <Helmet title="Авторизация" />
        <Content>
          <Row className="form-box animated fadeInDown">
            <Col className="box-welcome" span={10} offset={7}>
              <h1 className="logo-name">USER</h1>
              <h3>Добро пожаловать</h3>
            </Col>
            <Col span={10} offset={7}>
              <LoginForm
                authLogin={authLogin}
              />
            </Col>
          </Row>
        </Content>
      </Layout>
    </HelmetProvider>
  );
};

Login.propTypes = {
  authLogin: PropTypes.func.isRequired,
};

export default Login;
