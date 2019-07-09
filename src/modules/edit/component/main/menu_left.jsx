import React from "react";
import {Link} from "react-router";

import { Menu, Layout, Icon } from 'antd';
const {Sider } = Layout;

export default class MenuLeft extends React.Component {
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
                    USER
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