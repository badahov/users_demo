import config from 'config';

import React, { Component } from 'react';

import { Modal, Icon, Button } from 'antd';

const confirm = Modal.confirm;

export default class Logout extends Component {
  handleLogout = () => {
    confirm({
      title: 'Вы хотите выйти?',
      okText: 'Да',
      okType: 'danger',
      cancelText: 'Нет',
      onOk() {
        const urlAuth = config.domain.auth + config.server.setPoint + '/auth/log-out';

        let XHR = ('onload' in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest;
        let xhr = new XHR();
        xhr.open('POST', urlAuth, true);
        xhr.withCredentials = true;
        xhr.send();
        xhr.onload = function () {
          const urlMain = config.domain.api + config.server.setPoint + '/auth/log-out';
          let XHR2 = ('onload' in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest;
          let xhr2 = new XHR2();
          xhr2.open('POST', urlMain, true);
          xhr2.withCredentials = true;
          xhr2.send();
          xhr2.onload = function () {
            config.page.login();
          };
        };
      },
      onCancel() {
        console.log('Cancel handle logout');
      },
    });
  };

  render() {
    return (
      <Button type="danger" size="small" onClick={this.handleLogout}><Icon
        type="logout"/> Выход</Button>
    );
  }
}
