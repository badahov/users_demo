'use strict';

import React, {Component} from 'react';
import {hashHistory} from 'react-router';

import { Modal, Icon, Button } from 'antd';
const confirm = Modal.confirm;

const api = process.env['API_AUTH'];

export default class Logout extends Component
{
    loginPage = () =>
    {
        hashHistory.push('/login');
    };

    handleLogout = () => {
        const self = this;
        confirm({
            title: 'Вы хотите выйти?',
            //content: 'Some descriptions',
            okText: 'Да',
            okType: 'danger',
            cancelText: 'Нет',
            onOk() {
                const urlAuth = api + process.env['SET_POINT'] + '/auth/log-out';

                let XHR = ("onload" in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest;
                let xhr = new XHR();
                xhr.open('POST', urlAuth, true);
                xhr.withCredentials = true;
                xhr.send();
                xhr.onload = function()
                {
                    const urlMain =  process.env['API'] + process.env['SET_POINT'] + '/auth/log-out';
                    let XHR2 = ("onload" in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest;
                    let xhr2 = new XHR2();
                    xhr2.open('POST', urlMain, true);
                    xhr2.withCredentials = true;
                    xhr2.send();
                    xhr2.onload = function()
                    {
                        self.loginPage();
                    }
                };
            },
            onCancel() {
                console.log('Cancel');
            },
        });
    };

    render () {
        return (
            <Button type="danger" size="small" onClick={this.handleLogout}><Icon type="logout" /> Выход</Button>
        );
    }
}
