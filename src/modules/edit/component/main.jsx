import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import PropTypes from 'prop-types';

import {
  Layout,
  Spin,
} from 'antd';

import Logout from '../../app/logout';

import UserDataForm from './forms/data';
import UserPasswordForm from './forms/password';
import UserRolesForm from './forms/roles';

import HeaderPage from './header';
import Menu from './menu';
import { currentTypes } from '../../global/types';

const { Content } = Layout;

const helmetContext = {};

class Edit extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collapsed: false,
    };

    props.modelServer();
  }

  toggle = () => {
    const { collapsed } = this.state;

    this.setState({
      collapsed: !collapsed,
    });
  };

  renderTemplate = (page) => {
    const {
      item,
      params: {
        userId,
      },
      modelEdit,
    } = this.props;

    let getTemplate;

    switch (page) {
      case 'password':
        getTemplate = (
          <UserPasswordForm
            title="Добавить пользователя"
            user_id={userId}
            submit={modelEdit}
            wrappedComponentRef={(form) => {
              this.form = form;
            }}
          />
        );
        break;
      case 'roles':
        getTemplate = (
          <UserRolesForm
            title="Добавить пользователя"
            user_id={userId}
            item={item}
            submit={modelEdit}
            wrappedComponentRef={(form) => {
              this.form = form;
            }}
          />
        );
        break;
      default:
        getTemplate = (
          <UserDataForm
            title="Добавить пользователя"
            user_id={userId}
            item={item}
            submit={modelEdit}
            wrappedComponentRef={(form) => {
              this.form = form;
            }}
          />
        );
        break;
    }

    return getTemplate;
  };

  render() {
    const {
      item,
      current,
      params: {
        page,
        userId,
      },
    } = this.props;

    const { collapsed } = this.state;

    if (item && current) {
      const operatorName = item.operator_name;
      const operatorLogin = item.operator_login;

      const isLoad = (!current);

      return (
        <HelmetProvider context={helmetContext}>
          <Layout>
            <Menu
              collapsed={collapsed}
              page={page}
              userId={userId}
            />
            <Layout>
              <Helmet title="Users" />
              <HeaderPage
                title={operatorName}
                subTitle={`login: ${operatorLogin}`}
                collapsed={collapsed}
                toggle={this.toggle}
                extra={[
                  <Logout key="logout-1" />,
                ]}
              />
              <Content className="user-edit">
                <Spin
                  tip="Загрузка..."
                  size="large"
                  spinning={isLoad}
                >
                  { this.renderTemplate(page) }
                </Spin>
              </Content>
            </Layout>
          </Layout>
        </HelmetProvider>
      );
    }

    return null;
  }
}

Edit.defaultProps = {
  params: {
    userId: null,
  },
  item: null,
  current: null,
};

Edit.propTypes = {
  current: currentTypes,
  modelServer: PropTypes.func.isRequired,
  modelEdit: PropTypes.func.isRequired,
  params: PropTypes.shape({
    userId: PropTypes.string.isRequired,
    page: PropTypes.string.isRequired,
  }),
  item: PropTypes.shape({
    is_admin: PropTypes.bool.isRequired,
    is_reprint_admin: PropTypes.bool.isRequired,
    operator_code: PropTypes.number.isRequired,
    operator_id: PropTypes.number.isRequired,
    operator_login: PropTypes.string.isRequired,
    operator_name: PropTypes.string.isRequired,
    operator_token: PropTypes.string.isRequired,
  }),
};

export default Edit;
