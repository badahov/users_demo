'use strict';

import config from 'config';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';

import App   from './modules/app';
import Login from './modules/login';
import Users from './modules/users';
import Edit  from './modules/edit';
import Role  from './modules/role';

const rootRoute = {
  path: '/',
  component: App,
  indexRoute: Users,
  childRoutes: [
    Login,
    Edit,
    Role
  ],
};

ReactDOM.render(
  <Router history={config.history} routes={rootRoute}/>,
  document.getElementById('wrapper'),
);
