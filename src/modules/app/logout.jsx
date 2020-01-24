import React from 'react';

import { Modal, Icon, Button } from 'antd';

import config from '../../config';

const {
  confirm,
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
        xhr.onload = function onload() {
          const urlMain = `${config.domain.api}${config.server.setPoint}/auth/log-out`;
          const xhrX = new XMLHttpRequest();
          xhrX.open('POST', urlMain, true);
          xhrX.withCredentials = true;
          xhrX.send();
          xhrX.onload = function onloadX() {
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
      <Icon type="logout" />
      Выход
    </Button>
  );
};

export default Logout;
