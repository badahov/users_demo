'use strict';

import React from 'react';
import Helmet from "react-helmet";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
    userEdit as actionEdit,
    userCurrent as actionCurrent,
    userItem as actionUser
} from '../../store/actions/user';

import { Layout, Spin } from 'antd';
const { Content } = Layout;

import Logout from 'modules/app/component/logout';

import UserDataForm     from "../page/data/main";
import UserPasswordForm from "../page/password/main";
import UserRolesForm    from "../page/roles/main";

import HeaderPage from "./header_page";
import MenuLeft from "./menu_left";

class Edit extends React.Component
{
    static defaultProps = {
        params: {
            user_id: null
        }
    };

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
)(Edit);
