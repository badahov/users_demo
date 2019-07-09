'use strict';

import React, { Component } from 'react';

import Pace from './js/plugins/pace/pace.min';
import "modules/app/css/pace.css";
import "modules/app/css/toastr.min.css";
import "modules/app/css/animate.css";

import "antd/dist/antd.css";

import 'modules/app/less/main.less';

export default class Inbox extends Component
{
    componentDidMount = () => {
        Pace.start({
            document: false
        });

        Pace.options = {
            ajax: true,
            restartOnPushState: true,
            restartOnRequestAfter: true
        };
    };

    render() {
        return (
            <div className='theme-user'>
                {this.props.children}
            </div>
        );
    }
}
