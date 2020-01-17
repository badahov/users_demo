import React from 'react';
import { Link } from 'react-router';

import { Menu, PageHeader, Layout, Icon } from 'antd';

const { Header } = Layout;

const HeaderPage = (props) => {
    return (
      <Header>
        <PageHeader
          title={<span><Icon
            className="trigger"
            type={props.collapsed ? 'menu-unfold' : 'menu-fold'}
            onClick={props.toggle}
          />{props.title}</span>}
          subTitle={props.subTitle}
          extra={props.extra}
        />

        <Menu mode="horizontal">
          <Menu.Item key="team">
            <Link to={`/`}><Icon type="team"/>Пользователи</Link>
          </Menu.Item>
          <Menu.Item key="role">
            <Link to={`/role`}><Icon type="cluster"/>Роли</Link>
          </Menu.Item>
        </Menu>
      </Header>
    );
};

export default HeaderPage;
