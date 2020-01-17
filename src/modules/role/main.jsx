import React from 'react';
import { Provider } from 'react-redux';

import UserStore from './state';

import Index from './component';

import './css/index.less';

const Module = (props) => {
  const {location, params} = props;

  return (
    <Provider store={UserStore}>
      <Index
        location={location}
        params={params}
      />
    </Provider>
  );
};

export default Module;
