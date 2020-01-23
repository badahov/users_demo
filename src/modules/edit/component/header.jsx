import React from 'react';
import PropTypes from 'prop-types';
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

HeaderPage.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  collapsed: PropTypes.bool.isRequired,
  extra: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.element.isRequired,
  ])).isRequired,
  toggle: PropTypes.func.isRequired,
};

export default HeaderPage;
