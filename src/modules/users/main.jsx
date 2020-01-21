import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';

import UserStore from './state';

import Index from './component';

import './css/index.less';

const Module = (props) => {
  const { location, visibleUserAddForm, collapsedSiderMenu } = props;

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

Module.propTypes = {
  location: PropTypes.oneOfType([
    PropTypes.any,
  ]),
  visibleUserAddForm: PropTypes.bool,
  collapsedSiderMenu: PropTypes.bool,
};

export default Module;
