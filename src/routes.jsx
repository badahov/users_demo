import React from 'react';
import ReactDOM from 'react-dom';

import {
  Switch,
  Route,
} from 'react-router-dom';

import App from './modules/app';

import config from './config';

import Users from './modules/users/main';
import Login from './modules/login';

const Router = config.history;

ReactDOM.render(
  <Router>
    <App options={config}>
      <Switch>
        <Route exact path="/">
          <Users />
        </Route>
        <Login />
      </Switch>
    </App>
  </Router>,
  document.getElementById('wrapper'),
);


// import { Router } from 'react-router';
//
// import config from './config';
//
//
// import Login from './modules/login';
// import Users from './modules/users';
// import Edit from './modules/edit';
// import Role from './modules/role';
// import Demo from './modules/demo';

// const rootRoute = {
//   path: '/',
//   component: App,
//   indexRoute: Users,
//   childRoutes: [
//     Login,
//     Edit,
//     Role,
//     Demo,
//   ],
// };

// ReactDOM.render(
//   <Router history={config.history} routes={rootRoute} />,
//   document.getElementById('wrapper'),
// );
