'use strict';

import config from 'config';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';

import App from 'modules/app/main';
import Login from 'modules/login/route';
import Users from 'modules/users';
import Edit from 'modules/edit/route';
import Role from 'modules/role/route';

const rootRoute = {
  path: '/',
  component: App,
  indexRoute: Users,
  childRoutes: [
    Login,
    Edit,
    Role,
  ],
};

ReactDOM.render(
  <Router history={config.history} routes={rootRoute}/>,
  document.getElementById('wrapper'),
);
