'use strict';

import config from 'config';

import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute} from 'react-router';

import App   from 'modules/app/main';
// import Login from 'modules/login/main';
// import Users from 'modules/users/main';
import Login from 'modules/login/route';
import Users from 'modules/users/route';
import Edit  from 'modules/edit/route';
import Role  from 'modules/role/route';


// ReactDOM.render(
//     <Router history={config.history}>
//         <Route path="/" component={App}>
//             <IndexRoute component={Users}/>
//             <Route path="/login" component={Login}/>
//         </Route>
//     </Router>,
//   document.getElementById('wrapper')
// );


const rootRoute = {
    path: "/",
    component: App,
    indexRoute: Users,
    childRoutes: [
        Login,
        Edit,
        Role
    ]
};

ReactDOM.render(
  <Router history={config.history} routes={rootRoute} />,
  document.getElementById('wrapper')
);
