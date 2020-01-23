import React from 'react';
import { Provider } from 'react-redux';

import localStore from './store/state';

import Login from './component';

import './css/index.less';

const Inbox = () => (
  <Provider store={localStore}>
    <Login />
  </Provider>
);

export default Inbox;
