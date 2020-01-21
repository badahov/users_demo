import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Link } from 'react-router';

import { Menu, PageHeader, Layout, Row, Col, Spin, Icon, Button } from 'antd';

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

const { Header, Content, Sider } = Layout;

import UserTableItem from './user_table_item';
import UserAddForm from './forms/add';

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

    props.modelCurrentUser();
    props.modelServer();
  }

  shouldComponentUpdate = (nextProps, nextState) => {
    const { items, location, header, modelItems, loading, location: {query} } = this.props;
    const { page, collapsedSiderMenu, visibleUserAddForm } = this.state;

    const params = ['name', 'code', 'login'];

    (new Filters({
      params: params,
      query: location.query,
      nextHeader: nextProps.header,
      header: header,
      page: page,
      action: () => {
        modelItems(query);
      },
    })).isUpdate();

    return loading !== nextProps.loading ||
      collapsedSiderMenu !== nextState.collapsedSiderMenu ||
      visibleUserAddForm !== nextState.visibleUserAddForm ||
      header !== nextProps.header ||
      items !== nextProps.items;
  };

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
    this.setState({
      visibleUserAddForm: !this.state.visibleUserAddForm,
    });
  };

  /**
   * Open or close the menu
   * @private
   */
  switchSiderMenu = () => {
    this.setState({
      collapsedSiderMenu: !this.state.collapsedSiderMenu,
    });
  };

  render() {
    return (
      <HelmetProvider context={helmetContext}>
        <Layout>
          <Sider width={this.state.siderWidth} trigger={null} collapsible
                 collapsed={this.state.collapsedSiderMenu}>
            <div className="logo">USER</div>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={this.state.menuSelectedKeys}>
              <Menu.Item key="left-menu-1">
                <Link to="/"><Icon type="team"/><span>Пользователи</span></Link>
              </Menu.Item>
              <Menu.Item key="left-menu-2">
                <Link to="/role"><Icon type="cluster"/><span>Роли</span></Link>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <Spin tip="Загрузка..." size="large" spinning={this.props.loading}>
              <Helmet title="Users"/>
              <Header>
                <PageHeader
                  subTitle="Пользователи"
                  title={<span>
                    <Icon
                      className="trigger"
                      type={this.state.collapsedSiderMenu ? 'menu-unfold' : 'menu-fold'}
                      onClick={this.switchSiderMenu}
                    />Users
                  </span>}
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
                    <Logout key="logout-1"/>,
                  ]}
                />
              </Header>
              <Content className='user-list'>
                <Row>
                  <Col span={24}>
                    <Table overlayClassName="table-users" striped={false} thead={[
                      <th key="ht-1">
                        <Filter>
                          <Search
                            callback={this.props.setHeader}
                            model="code"
                            value={this.props.header.code}
                            placeholder="Код"
                            isFocus={true}
                          />
                          <Sorting id='code' fsort={this.props.sort} />
                        </Filter>
                      </th>,
                      <th key="ht-2">
                        <Filter>
                          <Search
                            callback={this.props.setHeader}
                            model="name"
                            value={this.props.header.name}
                            placeholder="Имя"
                          />
                          <Sorting id='name' fsort={this.props.sort} />
                        </Filter>
                      </th>,
                      <th key="ht-3">
                        <Filter>
                          <Search
                            callback={this.props.setHeader}
                            model="login"
                            value={this.props.header.login}
                            placeholder="Логин"
                          />
                          <Sorting id='login' fsort={this.props.sort} />
                        </Filter>
                      </th>,
                      <th key="ht-4">
                        <Text>Админ</Text>
                      </th>,
                      <th key="ht-5">
                        <Text>Перепечать</Text>
                      </th>,
                      <th key="ht-6"></th>,
                    ]}>
                      {
                        (this.props.items)
                          ?
                          this.props.items.map((item) => <UserTableItem
                            key={item.operator_id}
                            userId={item.operator_id}
                            userCode={item.operator_code}
                            userName={item.operator_name}
                            userLogin={item.operator_login}
                            isAdmin={item.is_admin}
                            isReprintAdmin={item.is_reprint_admin}

                            access={this.props.access}

                            onDeleteUser={this.props.modelDelete}
                          />)
                          : null
                      }
                    </Table>
                  </Col>
                  <Col span={24}>
                    {
                      (this.props.paginate)
                        ?
                        <Pagination
                          url="/"
                          data={this.props.paginate}
                          onQuery={this.props.modelItems}
                        />
                        : null
                    }
                  </Col>
                  <UserAddForm
                    title="Добавить пользователя"
                    visible={this.state.visibleUserAddForm}
                    urlQuery={this.props.location.query}
                    submitForm={this.props.modelAdd}
                    onClose={this.onCloseUserAddForm}
                    wrappedComponentRef={(form) => this.form = form}
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

export default Users;
