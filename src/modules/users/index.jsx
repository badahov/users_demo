import React from 'react';
import {
  Route,
} from 'react-router-dom';

import Main from './main';

const MainRoute = () => (<Route exact path="/"><Main /></Route>);

export default MainRoute;
