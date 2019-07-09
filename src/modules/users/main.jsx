import React, {Component} from 'react';
import {Provider} from 'react-redux';

import UserStore from './store/state';

import Index from './component/main/index';

import './less/index.less';

class UsersMain extends Component {

    static defaultProps = {
        visibleUserAddForm: false,
        collapsedSiderMenu: true
    };

    render() {
        return (
            <Provider store={UserStore}>
                <Index
                    header={this.props.header}
                    location={this.props.location}
                    visibleUserAddForm={this.props.visibleUserAddForm}
                    collapsedSiderMenu={this.props.collapsedSiderMenu}
                />
            </Provider>
        );
    }
}

export default UsersMain;