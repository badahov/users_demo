import React from 'react';
import { Provider } from 'react-redux';

import UserStore from './state';

import Index from './component';

import './css/index.less';

import { locationTypes, paramsTypes } from '../global/types';

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
  location: locationTypes.isRequired,
  params: paramsTypes.isRequired,
};

export default Module;
