import React from 'react';
import { Link } from 'react-router';

import { Menu, Layout, Icon } from 'antd';

const { Sider } = Layout;

const MenuLeft = (props) => {
    const { collapsed, userId, page } = props;

    let selectedKey = '1';
    switch (page) {
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
      <Sider width={250} trigger={null} collapsible collapsed={collapsed}>
        <div className="logo">USER</div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={[selectedKey]}>
          <Menu.Item key="1">
            <Link to={`/user/edit/${userId}/data`}><Icon type="idcard"/><span>Данные пользователя</span></Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to={`/user/edit/${userId}/password`}><Icon type="safety"/><span>Изменение пароля</span></Link>
          </Menu.Item>
          <Menu.Item key="4">
            <Link to={`/user/edit/${userId}/roles`}><Icon type="control"/><span>Управление ролями</span></Link>
          </Menu.Item>
        </Menu>
      </Sider>
    );
};

export default MenuLeft;
