import React from 'react';
import Helmet from 'react-helmet';

import { Layout, Spin } from 'antd';

import Logout from '../../app/logout';

import UserDataForm from './forms/data';
import UserPasswordForm from './forms/password';
import UserRolesForm from './forms/roles';

import HeaderPage from './header';
import Menu from './menu';

const { Content } = Layout;

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
      );
    }

    return null;
  }
}

Edit.defaultProps = {
  params: {
    userId: null,
  },
};

export default Edit;
