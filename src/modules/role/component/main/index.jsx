'use strict';

import React from 'react';
import Helmet from "react-helmet";
import classNames from "classnames";
import {Link} from "react-router";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
    userEdit as actionEdit,
    userCurrent as actionCurrent,
} from '../../store/actions/user';

import {permission as actionPermission, role as actionRole } from '../../store/actions/role';

import {Collapse, Card, List, Menu, PageHeader, Layout, Spin, Icon, Row, Col, Popover, Button} from 'antd';
const { Header, Content, Sider } = Layout;
const Panel = Collapse.Panel;
const { Meta } = Card;

import Logout from 'modules/login/component/logout';

import UserAddForm from "./source_add_form";

class Roles extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            selectRoleName: 'Гость',
            selectRoleId: 0,

            collapsed: true,
            visibleSourceAddForm: false,
            visibleId: null,
            items: props.items,
            loading: true,
            operationId: '',
        };

        this.props.actionCurrent();
        this.props.actionRole('items');

        this.props.actionPermission('item', {id:0});
    }

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    onClose = () => {
        this.setState({
            visibleSourceAddForm: false,
        });
    };

    onOpen = () => {
        this.setState({
            visibleSourceAddForm: !this.state.visibleSourceAddForm,
            visibleId: 1
        });
    };

    onRoleSelect = (ev, id) => {
        for (let i=0; i < this.props.role.length; i++) {
            let item = this.props.role[i];

            if (item.id === id) {
                this.setState({
                    selectRoleName: item.name,
                    selectRoleId: item.id,
                });

                this.props.actionPermission('item', {id:item.id});

                break;
            }
        }

        let listRoleItems = document.querySelectorAll(".list-role-item");
        listRoleItems.forEach((item) => {
            item.setAttribute("style", "background: #fff");
        });

        let listRoleItemId = document.querySelector(`.list-role-item-${id}`);
        listRoleItemId.setAttribute("style", "background: #fafafa");
    };

    shouldComponentUpdate = (nextProps, nextState) => {
        return nextProps.permission !== this.props.permission ||
            nextState.visibleSourceAddForm !== this.state.visibleSourceAddForm ||
            nextState.collapsed !== this.state.collapsed ||
            nextProps.role !== this.props.role;
    };

    permissionsSwitch = (group, permission, enabled) => {
        this.props.actionPermission('switch', {
            enabled: enabled,
            permission_id: permission,
            role_id: this.state.selectRoleId
        });
    };

    render()
    {
        if (this.props.current) {
            let isLoad = (this.props.current) ? false : true;

            return (
                <Layout>
                    <Sider width={300} trigger={null} collapsible collapsed={this.state.collapsed}>
                        <div className="logo">
                            USER
                        </div>
                        <Menu theme="dark" mode="inline" defaultSelectedKeys={['2']}>
                            <Menu.Item key="1">
                                <Link  to="/"><Icon type="team" /><span>Пользователи</span></Link>
                            </Menu.Item>
                            <Menu.Item key="2">
                                <Link  to="/role"><Icon type="cluster" /><span>Роли</span></Link>
                            </Menu.Item>
                            <Menu.ItemGroup key="roles" title="">
                                {
                                    (this.props.role)
                                    ?
                                        this.props.role.map((item) =>
                                            <Menu.Item onClick={(ev) => {
                                                this.onRoleSelect(ev, item.id)
                                            }} key={`role-${item.id}`}>
                                                <Icon type="property-safety" />
                                                <span>{item.name}</span>
                                            </Menu.Item>
                                        )
                                    :null
                                }
                            </Menu.ItemGroup>
                        </Menu>
                    </Sider>
                    <Layout>
                        <Helmet title={this.state.selectRoleName} />
                        <Header>
                            <PageHeader
                                title={<span><Icon
                                    className="trigger"
                                    type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                                    onClick={this.toggle}
                                />Управление ролями</span>}
                                subTitle={`текущая: ${this.state.selectRoleName}`}
                                extra={[
                                    <Button key="add-role" className="btn-user-add" onClick={() => this.onOpen()} type="primary" size="small">
                                        Управление ролями
                                    </Button>,
                                    <Logout key="logout-1" />
                                ]}
                            />
                        </Header>
                        <Content className='user-list'>
                            <Spin tip="Загрузка..." size="large" spinning={isLoad}>
                                <Row>
                                    <Col span={24}>
                                        <Collapse defaultActiveKey={['1']}>
                                        {
                                            (this.props.permission.modules) ?
                                                this.props.permission.modules.map((item) =>
                                                    <Panel header={`${item.name}: ${item.desc}`} key={item.group}>
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
                                                            dataSource={item.permissions}
                                                            renderItem={(item, i) => (
                                                                <List.Item>
                                                                    <Link  onClick={() => { this.permissionsSwitch(item.group, item.id, item.enabled) }}>
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
                                                                                    (item.enabled) ? <Icon type="check" /> : <Icon type="stop" />
                                                                                }
                                                                                title={item.name}
                                                                                //description="Описание"
                                                                            />

                                                                        </Card>
                                                                        </Popover>
                                                                    </Link>
                                                                </List.Item>
                                                            )}
                                                        />
                                                    </Panel>
                                                )
                                            : null
                                        }
                                        </Collapse>
                                    </Col>

                                    <UserAddForm
                                        visible={this.state.visibleSourceAddForm}
                                        visibleId={this.state.visibleId}
                                        title='Роли'
                                        onRoleSelect={this.onRoleSelect}
                                        roleList={this.props.role}
                                        actionRole={this.props.actionRole}

                                        onClose={this.onClose} wrappedComponentRef={(form) => this.form = form}
                                    />
                                </Row>
                            </Spin>
                        </Content>
                    </Layout>
                </Layout>
            );
        } else {
            return null
        }
    }
}

export default connect(
    (state) => {
        return {
            access: state.user.access,
            current: state.user.current,
            role: state.role.role,
            permission: state.role.permission
        };
    },
    (dispatch) => bindActionCreators({actionCurrent, actionEdit, actionPermission, actionRole, dispatch}, dispatch)
)(Roles);
