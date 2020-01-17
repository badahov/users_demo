'use strict';

import React, {Component} from 'react';
import {Provider} from 'react-redux';

import localStore from './store/state';

import Login from './component/login';

import './css/index.less';

export default class Inbox extends Component {
    render() {
        return (
            <Provider store={localStore}>
                <Login />
            </Provider>
        );
    }
}
