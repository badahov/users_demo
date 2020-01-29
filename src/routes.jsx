import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';

import config from './config';

import App from './modules/app';
import Login from './modules/login';
import Users from './modules/users';
import Edit from './modules/edit';
import Role from './modules/role';
import Demo from './modules/demo';

const rootRoute = {
  path: '/',
  component: App,
  indexRoute: Users,
  childRoutes: [
    Login,
    Edit,
    Role,
    Demo,
  ],
};

ReactDOM.render(
  <Router history={config.history} routes={rootRoute} />,
  document.getElementById('wrapper'),
);
