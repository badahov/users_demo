'use strict';

import React from 'react';
import Helmet from "react-helmet";
import history from 'modules/app/component/core/history';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
    user as actionUser
} from '../../store/actions/user';

import {Menu, PageHeader, Layout, Row, Col, Spin, Icon, Button, message} from 'antd';
const { Header, Content, Sider } = Layout;

import Table     from 'modules/app/component/table/table';

import Logout     from 'modules/app/component/logout';
import Pagination from 'modules/app/component/pagination';
import Filter     from 'modules/app/component/filter/filter';
import Sorting    from 'modules/app/component/filter/sorting';
import Search     from 'modules/app/component/filter/search';

import UserTableItem from './user_table_item';
import {Link} from "react-router";
import UserAddForm from "./user_add_form";

class Users extends React.Component
{
    static defaultProps = {
        loading: true,
        location: {
            query: {}
        }
    };

    constructor(props)
    {
        super(props);

        this.state = {
            siderWidth: 200,
            menuSelectedKeys: ['left-menu-1'],

            collapsedSiderMenu: props.collapsedSiderMenu,
            visibleUserAddForm: props.visibleUserAddForm,
        };

        //Загрузить данные авторизованного пользователя
        props.actionUser('current');
        this._loadingDataServer();
    }

    /**
     * Удалить пользователя
     * @param userId
     */
    onDeleteUser = userId => {
        this.props.actionUser('delete', {
            operator_id: userId
            }, (json) => {
            if (json.status === "ok") {
                if (json.msg) {
                    message.success(json.msg);
                    this.props.actionUser('items', this.props.location.query);
                }

                return true;
            } else if(json.msg) {
                message.error(this._errorMsg(json.msg));
                return false;
            }
        });
    };

    /**
     * Открыть форму добавления пользователя
     */
    onCloseUserAddForm = () => {
        this.setState({
            visibleUserAddForm: false,
        });
    };

    /**
     * Закрыть форму добавления пользователя
     */
    onOpenUserAddForm = () => {
        this.setState({
            visibleUserAddForm: !this.state.visibleUserAddForm
        });
    };

    /**
     * Раскрывает или закрывает меню
     * @private
     */
    _switchSiderMenu = () => {
        this.setState({
            collapsedSiderMenu: !this.state.collapsedSiderMenu,
        });
    };

    _fsort = sort => {
        this.props.location.query.sort = sort;
        this.props.actionUser('items', this.props.location.query);
    };

    /**
     * Загрузка данных с удаленного сервера
     * @private
     */
    _loadingDataServer = () => {
        this.props.actionUser('header', this.props.location.query);
        this.props.actionUser('items', this.props.location.query);
    };

    shouldComponentUpdate = (nextProps, nextState) => {
        const {location, header} = this.props;

        let isUpdate = false;

        if ((location.query.name !== nextProps.header.name) &&
            (header.name !== nextProps.header.name)) {
            location.query.name = nextProps.header.name;

            history.push({pathname: '/', query: location.query});
            isUpdate = true;
        } else if (location.query.name === '') {
            delete location.query.name;
            history.push({pathname: '/', query: location.query});
        }

        if ((location.query.code !== nextProps.header.code) &&
            (header.code !== nextProps.header.code)) {
            location.query.code = nextProps.header.code;

            history.push({pathname: '/', query: location.query});
            isUpdate = true;
        } else if (location.query.code === '') {
            delete location.query.code;
            history.push({pathname: '/', query: location.query});
        }

        if ((location.query.login !== nextProps.header.login) &&
            (header.login !== nextProps.header.login)) {

            location.query.login = nextProps.header.login;

            history.push({pathname: '/', query: location.query});
            isUpdate = true;
        } else if (location.query.login === '') {
            delete location.query.login;
            history.push({pathname: '/', query: location.query});
        }

        if (isUpdate) {
            this.props.actionUser('items', this.props.location.query);
        }

        if (this.props.loading && !nextProps.loading) {
            this.setState({
                loading: nextProps.loading
            });
        }

        return this.props.loading !== nextProps.loading ||
            this.state.collapsedSiderMenu !== nextState.collapsedSiderMenu ||
            this.state.visibleUserAddForm !== nextState.visibleUserAddForm;
    };

    render()
    {
        return (
            <Layout>
                <Sider width={this.state.siderWidth} trigger={null} collapsible collapsed={this.state.collapsedSiderMenu}>
                    <div className="logo">SUP</div>
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={this.state.menuSelectedKeys}>
                        <Menu.Item key="left-menu-1">
                            <Link to="/"><Icon type="team" /><span>Пользователи</span></Link>
                        </Menu.Item>
                        <Menu.Item key="left-menu-2">
                            <Link to="/role"><Icon type="cluster" /><span>Роли</span></Link>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    <Spin tip="Загрузка..." size="large" spinning={this.props.loading}>
                        <Helmet title="Users" />
                        <Header>
                            <PageHeader
                                title={<span><Icon
                                    className="trigger"
                                    type={this.state.collapsedSiderMenu ? 'menu-unfold' : 'menu-fold'}
                                    onClick={this._switchSiderMenu}
                                />Users</span>}
                                subTitle="Пользователи SUP"
                                extra={[
                                    <Button key="add-user" className="btn-user-add" onClick={() => this.onOpenUserAddForm()} type="primary" icon="user-add" size="small">
                                        Добавить пользователя
                                    </Button>,
                                    <Logout key="logout-1" />
                                ]}
                            />
                        </Header>
                        <Content className='user-list'>
                            <Row>
                                <Col span={24}>
                                    <Table overlayClassName="table-users" striped={false} thead={[
                                        <Filter fsort={this._fsort}>
                                            <Search model="user.header.code" placeholder="Код" />
                                            <Sorting id='code' />
                                        </Filter>,
                                        <Filter fsort={this._fsort}>
                                            <Search model="user.header.name" placeholder="Имя" />
                                            <Sorting id='name' />
                                        </Filter>,
                                        <Filter fsort={this._fsort}>
                                            <Search model="user.header.login" placeholder="Логин" />
                                            <Sorting id='login' />
                                        </Filter>,
                                        <span>Админ</span>,
                                        <span>Перепечать</span>,
                                        <span></span>
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

                                                    onDeleteUser={this.onDeleteUser}
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
                                                onQuery={(query) => {
                                                    this.props.actionUser('items', query);
                                                }}
                                            />
                                        : null
                                    }
                                </Col>
                                <UserAddForm
                                    title="Добавить пользователя"
                                    visible={this.state.visibleUserAddForm}
                                    urlQuery={this.props.location.query}
                                    actionUser={this.props.actionUser}
                                    onClose={this.onCloseUserAddForm} wrappedComponentRef={(form) => this.form = form}
                                />
                            </Row>
                        </Content>
                    </Spin>
                </Layout>
            </Layout>
        );
    }
}

export default connect(
    (state) => {
        return {
            loading: (Array.isArray(state.user.loading)) ? true : state.user.loading,
            header: state.user.header,
            items: state.user.items.data,
            paginate: state.user.items.paginate,
            access: state.user.items.access,
            current: state.user.current,
        };
    },
    (dispatch) => bindActionCreators({actionUser, dispatch}, dispatch)
)(Users);
