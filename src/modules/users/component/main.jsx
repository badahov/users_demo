import React from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/map';
import debounce from 'lodash/debounce';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Link } from 'react-router';

import {
  Menu,
  PageHeader,
  Layout,
  Row,
  Col,
  Spin,
  Icon,
  Button,
} from 'antd';

import UserTableItem from './user_table_item';
import UserAddForm from './forms/add';

import {
  Pagination,
  Filter,
  Sorting,
  Search,
  Table,
  Logout,
  Text,
  Filters,
} from '../../app/core';

import {
  accessTypes,
  locationTypes,
  paginateTypes,
} from '../../global/types';

const { Header, Content, Sider } = Layout;

const helmetContext = {};

class Users extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      siderWidth: 200,
      menuSelectedKeys: ['left-menu-1'],

      collapsedSiderMenu: props.collapsedSiderMenu,
      visibleUserAddForm: props.visibleUserAddForm,
    };

    this.modelItemsDebounced = debounce(props.modelItems, 250);

    props.modelCurrentUser();
    props.modelServer();
  }

  shouldComponentUpdate(nextProps, nextState) {
    const {
      items,
      header,
      loading,
      location: {
        query,
      },
    } = this.props;
    const {
      page,
      collapsedSiderMenu,
      visibleUserAddForm,
    } = this.state;

    const params = ['name', 'code', 'login'];

    (new Filters({
      params,
      header,
      page,
      query,
      nextHeader: nextProps.header,
      model: this.modelItemsDebounced,
    })).isUpdate();

    return items !== nextProps.items
      || JSON.stringify(header) !== JSON.stringify(nextProps.header)
      || loading !== nextProps.loading
      || collapsedSiderMenu !== nextState.collapsedSiderMenu
      || visibleUserAddForm !== nextState.visibleUserAddForm;
  }

  componentWillUnmount() {
    this.modelItemsDebounced.cancel();
  }

  /**
   * Open the add user form
   */
  onCloseUserAddForm = () => {
    this.setState({
      visibleUserAddForm: false,
    });
  };

  /**
   * Close the add user form
   */
  onOpenUserAddForm = () => {
    const { visibleUserAddForm } = this.state;

    this.setState({
      visibleUserAddForm: !visibleUserAddForm,
    });
  };

  /**
   * Open or close the menu
   * @private
   */
  switchSiderMenu = () => {
    const { collapsedSiderMenu } = this.state;

    this.setState({
      collapsedSiderMenu: !collapsedSiderMenu,
    });
  };

  render() {
    const {
      loading,
      setHeader,
      sort,
      items,
      access,
      modelDelete,
      paginate,
      modelItems,
      modelAdd,
      header: {
        code,
        name,
        login,
      },
      location: {
        query,
      },
    } = this.props;

    const {
      siderWidth,
      collapsedSiderMenu,
      menuSelectedKeys,
      visibleUserAddForm,
    } = this.state;

    return (
      <HelmetProvider context={helmetContext}>
        <Layout>
          <Sider width={siderWidth} trigger={null} collapsible collapsed={collapsedSiderMenu}>
            <div className="logo">USER</div>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={menuSelectedKeys}>
              <Menu.Item key="left-menu-1">
                <Link to="/">
                  <Icon type="team" />
                  <span>
                    Пользователи
                  </span>
                </Link>
              </Menu.Item>
              <Menu.Item key="left-menu-2">
                <Link to="/role">
                  <Icon type="cluster" />
                  <span>Роли</span>
                </Link>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <Spin tip="Загрузка..." size="large" spinning={loading}>
              <Helmet title="Users" />
              <Header>
                <PageHeader
                  subTitle="Пользователи"
                  title={(
                    <span>
                      <Icon
                        className="trigger"
                        type={collapsedSiderMenu ? 'menu-unfold' : 'menu-fold'}
                        onClick={this.switchSiderMenu}
                      />
                      Users
                    </span>
                  )}
                  extra={[
                    <Button
                      key="add-user"
                      className="btn-user-add"
                      type="primary"
                      icon="user-add"
                      size="small"
                      onClick={() => this.onOpenUserAddForm()}
                    >
                      Добавить пользователя
                    </Button>,
                    <Logout key="logout-1" />,
                  ]}
                />
              </Header>
              <Content className="user-list">
                <Row>
                  <Col span={24}>
                    <Table
                      overlayClassName="table-users"
                      striped={false}
                      thead={[
                        <th key="ht-1">
                          <Filter>
                            <Search
                              callback={setHeader}
                              model="code"
                              value={code}
                              placeholder="Код"
                            />
                            <Sorting id="code" fsort={sort} />
                          </Filter>
                        </th>,
                        <th key="ht-2">
                          <Filter>
                            <Search
                              callback={setHeader}
                              model="name"
                              value={name}
                              placeholder="Имя"
                            />
                            <Sorting id="name" fsort={sort} />
                          </Filter>
                        </th>,
                        <th key="ht-3">
                          <Filter>
                            <Search
                              callback={setHeader}
                              model="login"
                              value={login}
                              placeholder="Логин"
                            />
                            <Sorting id="login" fsort={sort} />
                          </Filter>
                        </th>,
                        <th key="ht-4">
                          <Text>Админ</Text>
                        </th>,
                        <th key="ht-5">
                          <Text>Перепечать</Text>
                        </th>,
                        <th key="ht-6" />,
                      ]}
                    >
                      {
                        (items)
                          ? map(items, (item) => (
                            <UserTableItem
                              key={item.operator_id}
                              userId={item.operator_id}
                              userCode={item.operator_code}
                              userName={item.operator_name}
                              userLogin={item.operator_login}
                              isAdmin={item.is_admin}
                              isReprintAdmin={item.is_reprint_admin}
                              access={access}
                              onDeleteUser={modelDelete}
                            />
                          ))
                          : null
                      }
                    </Table>
                  </Col>
                  <Col span={24}>
                    {
                      (paginate)
                        ? (
                          <Pagination
                            url="/"
                            data={paginate}
                            onQuery={modelItems}
                          />
                        )
                        : null
                    }
                  </Col>
                  <UserAddForm
                    title="Добавить пользователя"
                    visible={visibleUserAddForm}
                    urlQuery={query}
                    submitForm={modelAdd}
                    onClose={this.onCloseUserAddForm}
                    wrappedComponentRef={(form) => {
                      this.form = form;
                    }}
                  />
                </Row>
              </Content>
            </Spin>
          </Layout>
        </Layout>
      </HelmetProvider>
    );
  }
}

Users.defaultProps = {
  items: null,
  paginate: null,
};

Users.propTypes = {
  collapsedSiderMenu: PropTypes.bool.isRequired,
  items: PropTypes.arrayOf(PropTypes.object),
  loading: PropTypes.bool.isRequired,
  modelAdd: PropTypes.func.isRequired,
  modelCurrentUser: PropTypes.func.isRequired,
  modelDelete: PropTypes.func.isRequired,
  modelItems: PropTypes.func.isRequired,
  modelServer: PropTypes.func.isRequired,
  setHeader: PropTypes.func.isRequired,
  sort: PropTypes.func.isRequired,
  visibleUserAddForm: PropTypes.bool.isRequired,
  access: accessTypes.isRequired,
  location: locationTypes.isRequired,
  header: PropTypes.shape({
    code: PropTypes.string,
    login: PropTypes.string,
    name: PropTypes.string,
    status: PropTypes.string,
  }).isRequired,
  paginate: paginateTypes,
};

export default Users;
