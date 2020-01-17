import React, {Component} from 'react';
import {Provider} from 'react-redux';

import UserStore from './store/state';

import Index from './component';

import './css/index.less';

class EditMain extends Component {
    render() {
        return (
            <Provider store={UserStore}>
                <Index
                    header={this.props.header}
                    location={this.props.location}
                    params={this.props.params}
                />
            </Provider>
        );
    }
}

export default EditMain;