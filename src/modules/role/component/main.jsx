import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import classNames from 'classnames';
import map from 'lodash/map';
import forEach from 'lodash/forEach';
import { Link } from 'react-router';

import {
  Collapse,
  Card,
  List,
  Menu,
  PageHeader,
  Layout,
  Spin,
  Icon,
  Row,
  Col,
  Popover,
  Button,
} from 'antd';

import Logout from '../../app/logout';

import UserAddForm from './forms/add';

import {
  currentTypes,
} from '../../global/types';

const { Header, Content, Sider } = Layout;
const { Panel } = Collapse;
const { Meta } = Card;

class Roles extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectRoleName: 'Гость',
      selectRoleId: 0,

      collapsed: true,
      visibleSourceAddForm: false,
      visibleId: null,
    };

    props.modelServer();
  }

  toggle = () => {
    const { collapsed } = this.state;
    this.setState({
      collapsed: !collapsed,
    });
  };

  onClose = () => {
    this.setState({
      visibleSourceAddForm: false,
    });
  };

  onOpen = () => {
    const { visibleSourceAddForm } = this.state;
    this.setState({
      visibleSourceAddForm: !visibleSourceAddForm,
      visibleId: 1,
    });
  };

  onRoleSelect = (ev, setId) => {
    const {
      role,
      modelPermissionItem,
    } = this.props;

    for (let i = 0; i < role.length; i += 1) {
      const {
        id,
        name,
      } = role[i];

      if (id === setId) {
        this.setState({
          selectRoleName: name,
          selectRoleId: id,
        });

        modelPermissionItem({ id });
        break;
      }
    }

    const listRoleItems = document.querySelectorAll('.list-role-item');
    forEach(listRoleItems, (item) => {
      item.setAttribute('style', 'background: #fff');
    });

    const listRoleItemId = document.querySelector(`.list-role-item-${setId}`);
    if (listRoleItemId) {
      listRoleItemId.setAttribute('style', 'background: #fafafa');
    }
  };

  shouldComponentUpdate = (nextProps, nextState) => {
    const {
      permission,
      role,
    } = this.props;

    const {
      visibleSourceAddForm,
      collapsed,
    } = this.state;

    return nextProps.permission !== permission
      || nextState.visibleSourceAddForm !== visibleSourceAddForm
      || nextState.collapsed !== collapsed
      || nextProps.role !== role;
  };

  permissionsSwitch = (group, permission, enabled) => {
    const { modelPermissionSwitch } = this.props;
    const { selectRoleId } = this.state;

    modelPermissionSwitch({
      enabled,
      permission_id: permission,
      role_id: selectRoleId,
    });
  };

  render() {
    const {
      current,
      role,
      permission,
      modelRoleDelete,
      modelRoleEdit,
      modelRoleAdd,
    } = this.props;

    const {
      collapsed,
      selectRoleName,
      visibleSourceAddForm,
      visibleId,
    } = this.state;

    if (current && permission) {
      const isLoad = (!current);

      return (
        <Layout>
          <Sider width={300} trigger={null} collapsible collapsed={collapsed}>
            <div className="logo">
              USER
            </div>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['2']}>
              <Menu.Item key="1">
                <Link to="/">
                  <Icon type="team" />
                  <span>Пользователи</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/role">
                  <Icon type="cluster" />
                  <span>Роли</span>
                </Link>
              </Menu.Item>
              <Menu.ItemGroup key="roles" title="">
                {
                  (role)
                    ? map(role, (item) => (
                      <Menu.Item
                        onClick={(ev) => this.onRoleSelect(ev, item.id)}
                        key={`role-${item.id}`}
                      >
                        <Icon type="property-safety" />
                        <span>{item.name}</span>
                      </Menu.Item>
                    ))
                    : null
                }
              </Menu.ItemGroup>
            </Menu>
          </Sider>
          <Layout>
            <Helmet title={selectRoleName} />
            <Header>
              <PageHeader
                title={(
                  <span>
                    <Icon
                      className="trigger"
                      type={collapsed ? 'menu-unfold' : 'menu-fold'}
                      onClick={this.toggle}
                    />
                    Управление ролями
                  </span>
                )}
                subTitle={`текущая: ${selectRoleName}`}
                extra={[
                  <Button
                    key="add-role"
                    className="btn-user-add"
                    onClick={() => this.onOpen()}
                    type="primary"
                    size="small"
                  >
                    Управление ролями
                  </Button>,
                  <Logout key="logout-1" />,
                ]}
              />
            </Header>
            <Content className="user-list">
              <Spin tip="Загрузка..." size="large" spinning={isLoad}>
                <Row>
                  <Col span={24}>
                    <Collapse defaultActiveKey={['1']}>
                      {
                        (permission.modules)
                          ? map(permission.modules, (module) => (
                            <Panel header={`${module.name}: ${module.desc}`} key={module.group}>
                              <List
                                grid={{
                                  gutter: 16,
                                  xs: 1,
                                  sm: 1,
                                  md: 2,
                                  lg: 3,
                                  xl: 4,
                                  xxl: 4,
                                }}
                                dataSource={module.permissions}
                                renderItem={(item) => (
                                  <List.Item>
                                    <Button
                                      className="btn-permission"
                                      onClick={() => {
                                        this.permissionsSwitch(item.group, item.id, item.enabled);
                                      }}
                                    >
                                      <Popover content={item.desc} title={item.name}>
                                        <Card
                                          className={
                                            classNames('permissions-default', {
                                              'permissions-enabled': item.enabled,
                                            })
                                          }
                                          size="small"
                                        >
                                          <Meta
                                            avatar={
                                              (item.enabled)
                                                ? <Icon type="check" />
                                                : <Icon type="stop" />
                                            }
                                            title={item.name}
                                          />
                                        </Card>
                                      </Popover>
                                    </Button>
                                  </List.Item>
                                )}
                              />
                            </Panel>
                          ))
                          : null
                      }
                    </Collapse>
                  </Col>
                  <UserAddForm
                    visible={visibleSourceAddForm}
                    visibleId={visibleId}
                    title="Роли"
                    roleList={role}
                    onRoleSelect={this.onRoleSelect}
                    actionDelete={modelRoleDelete}
                    actionEdit={modelRoleEdit}
                    actionAdd={modelRoleAdd}
                    onClose={this.onClose}
                    wrappedComponentRef={(form) => {
                      this.form = form;
                    }}
                  />
                </Row>
              </Spin>
            </Content>
          </Layout>
        </Layout>
      );
    }

    return null;
  }
}

Roles.defaultProps = {
  permission: null,
  role: null,
};

Roles.propTypes = {
  current: currentTypes.isRequired,
  modelPermissionItem: PropTypes.func.isRequired,
  modelPermissionSwitch: PropTypes.func.isRequired,
  modelRoleAdd: PropTypes.func.isRequired,
  modelRoleDelete: PropTypes.func.isRequired,
  modelRoleEdit: PropTypes.func.isRequired,
  modelServer: PropTypes.func.isRequired,
  permission: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    editable: PropTypes.number.isRequired,
    modules: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      desc: PropTypes.string.isRequired,
      group: PropTypes.number.isRequired,
    })),
  }),
  role: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    editable: PropTypes.number.isRequired,
  })),
};

export default Roles;
