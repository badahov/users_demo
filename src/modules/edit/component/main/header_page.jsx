import React from "react";
import {Link} from "react-router";

import { Menu, PageHeader, Layout, Icon } from 'antd';
const { Header } = Layout;

export default class HeaderPage extends React.Component {
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