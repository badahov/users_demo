import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';

import UserStore from './state';

import Index from './component';

import './css/index.less';

const Module = (props) => {
  const { location, params } = props;

  return (
    <Provider store={UserStore}>
      <Index
        location={location}
        params={params}
      />
    </Provider>
  );
};

Module.propTypes = {
  location: PropTypes.oneOfType([
    PropTypes.any,
  ]).isRequired,
  params: PropTypes.oneOfType([
    PropTypes.any,
  ]).isRequired,
};

export default Module;
