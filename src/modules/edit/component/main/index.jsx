'use strict';

import React from 'react';
import Helmet from "react-helmet";
import {Link} from "react-router";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
    userEdit as actionEdit,
    userCurrent as actionCurrent,
    userItem as actionUser
} from '../../store/actions/user';

import { Menu, PageHeader, Layout, Spin, Icon } from 'antd';
const { Header, Content, Sider } = Layout;

import Logout from 'modules/app/component/logout';

import UserDataForm     from "../page/data/main";
import UserPasswordForm from "../page/password/main";
import UserRolesForm    from "../page/roles/main";


class MenuLeft extends React.Component {
    render() {

        let selectedKey = '1';
        switch (this.props.page) {
            case 'data':
                selectedKey = '1';
                break;
            case 'password':
                selectedKey = '3';
                break;
            case 'roles':
                selectedKey = '4';
                break;
        }

        return (
            <Sider width={250} trigger={null} collapsible collapsed={this.props.collapsed}>
                <div className="logo">
                    SUP
                </div>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={[selectedKey]}>
                    <Menu.Item key="1">
                        <Link  to={`/user/edit/${this.props.user_id}/data`}><Icon type="idcard" /><span>Данные пользователя</span></Link>
                    </Menu.Item>
                    {
                        (false)
                        ?
                            <Menu.Item key="2">
                                <Link  to={`/user/edit/${this.props.user_id}/token`}><Icon type="idcard" /><span>Токены</span></Link>
                            </Menu.Item>
                        : null
                    }
                    <Menu.Item key="3">
                        <Link  to={`/user/edit/${this.props.user_id}/password`}><Icon type="safety" /><span>Изменение пароля</span></Link>
                    </Menu.Item>
                    <Menu.Item key="4">
                        <Link  to={`/user/edit/${this.props.user_id}/roles`}><Icon type="control" /><span>Управление ролями</span></Link>
                    </Menu.Item>
                </Menu>
            </Sider>
        )
    }
}

class HeaderPage extends React.Component {
    state = {
        current: 'mail',
    };

    handleClick = e => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    };

    render() {
        return (
            <Header>
                <PageHeader
                    title={<span><Icon
                        className="trigger"
                        type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'}
                        onClick={this.props.toggle}
                    />{this.props.title}</span>}
                    subTitle={this.props.subTitle}
                    extra={this.props.extra}
                />

                <Menu onClick={this.handleClick} mode="horizontal">
                    <Menu.Item key="team">
                        <Link  to={`/`}><Icon type="team" />Пользователи</Link>
                    </Menu.Item>
                    <Menu.Item key="role">
                        <Link  to={`/role`}><Icon type="cluster" />Роли</Link>
                    </Menu.Item>
                </Menu>
            </Header>
        )
    }
}

class Users extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            collapsed: false,
            loading: true,
        };

        this.props.actionCurrent();
        this.props.actionUser({id: props.params.user_id});
    }

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    shouldComponentUpdate = (nextProps, nextState) => {
        return nextProps.item === this.props.item;
    };

    render()
    {
        if (this.props.item && this.props.current) {
            let isLoad = (this.props.current) ? false : true;

            return (
                <Layout>
                    <MenuLeft
                        collapsed={this.state.collapsed}
                        page={this.props.params.page}
                        user_id={this.props.params.user_id}
                    />

                    <Layout>
                        <Helmet title="Users"/>

                        <HeaderPage
                            title={this.props.item.operator_name}
                            subTitle={`login: ${this.props.item.operator_login}`}
                            collapsed={this.state.collapsed}
                            toggle={this.toggle}
                            extra={[
                                <Logout key="logout-1" />
                            ]}
                        />

                        <Content className='user-edit'>
                            <Spin tip="Загрузка..." size="large" spinning={isLoad}>
                                {
                                    (this.props.params.page === "data")
                                        ?
                                        <UserDataForm
                                            title='Добавить пользователя'
                                            user_id={this.props.params.user_id}
                                            item={this.props.item}
                                            actionEdit={this.props.actionEdit}
                                            wrappedComponentRef={(form) => this.form = form}
                                        />
                                        : null
                                }

                                {
                                    (this.props.params.page === "password")
                                        ?
                                        <UserPasswordForm
                                            title='Добавить пользователя'
                                            user_id={this.props.params.user_id}
                                            actionEdit={this.props.actionEdit}
                                            wrappedComponentRef={(form) => this.form = form}
                                        />
                                        : null
                                }

                                {
                                    (this.props.params.page === "roles")
                                        ?
                                        <UserRolesForm
                                            title='Добавить пользователя'
                                            user_id={this.props.params.user_id}
                                            item={this.props.item}
                                            actionEdit={this.props.actionEdit}
                                            wrappedComponentRef={(form) => this.form = form}
                                        />
                                        : null
                                }
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
            action: state.user.action,
            current: state.user.current,
            item: state.user.item.data,
        };
    },
    (dispatch) => bindActionCreators({actionCurrent, actionUser, actionEdit, dispatch}, dispatch)
)(Users);
