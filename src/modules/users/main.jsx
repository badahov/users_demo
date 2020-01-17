import React from 'react';
import { Provider } from 'react-redux';

import UserStore from './state';

import Index from './component';

import './css/index.less';

const Module = (props) => {
  const {location, visibleUserAddForm, collapsedSiderMenu} = props;

  return (
    <Provider store={UserStore}>
      <Index
        location={location}
        visibleUserAddForm={visibleUserAddForm}
        collapsedSiderMenu={collapsedSiderMenu}
      />
    </Provider>
  );
};

Module.defaultProps = {
  visibleUserAddForm: false,
  collapsedSiderMenu: true,
};

export default Module;
