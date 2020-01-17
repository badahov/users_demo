import React, { Component } from 'react';
import { Provider } from 'react-redux';

import UserStore from './state';

import Index from './component';

import './css/index.less';

class Module extends Component {

  static defaultProps = {
    visibleUserAddForm: false,
    collapsedSiderMenu: true,
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

export default Module;
