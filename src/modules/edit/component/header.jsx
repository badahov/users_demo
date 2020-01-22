import React from 'react';
import { Link } from 'react-router';

import {
  Menu,
  PageHeader,
  Layout,
  Icon,
} from 'antd';

const { Header } = Layout;

const HeaderPage = (props) => {
  const {
    collapsed,
    toggle,
    title,
    subTitle,
    extra,
  } = props;

  return (
    <Header>
      <PageHeader
        title={(
          <span>
            <Icon
              className="trigger"
              type={collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={toggle}
            />
            {title}
          </span>
        )}
        subTitle={subTitle}
        extra={extra}
      />
      <Menu mode="horizontal">
        <Menu.Item key="team">
          <Link to="/">
            <Icon type="team" />
            Пользователи
          </Link>
        </Menu.Item>
        <Menu.Item key="role">
          <Link to="/role">
            <Icon type="cluster" />
            Роли
          </Link>
        </Menu.Item>
      </Menu>
    </Header>
  );
};

export default HeaderPage;
