import React from 'react';

import { Modal, Icon, Button } from 'antd';

import config from '../../config';

const {
  Modal: {
    confirm,
  },
} = Modal;

const Logout = () => {
  const handleLogout = () => {
    confirm({
      title: 'Вы хотите выйти?',
      okText: 'Да',
      okType: 'danger',
      cancelText: 'Нет',
      onOk() {
        const urlAuth = `${config.domain.auth}${config.server.setPoint}/auth/log-out`;

        const xhr = new XMLHttpRequest();
        xhr.open('POST', urlAuth, true);
        xhr.withCredentials = true;
        xhr.send();
        xhr.onload = function () {
          const urlMain = `${config.domain.api}${config.server.setPoint}/auth/log-out`;
          const xhr2 = new XMLHttpRequest();
          xhr2.open('POST', urlMain, true);
          xhr2.withCredentials = true;
          xhr2.send();
          xhr2.onload = function () {
            config.page.login();
          };
        };
      },
    });
  };

  return (
    <Button
      type="danger"
      size="small"
      onClick={handleLogout}
    >
      <Icon type="logout">
        Выход
      </Icon>
    </Button>
  );
};

export default Logout;
