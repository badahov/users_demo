import React from 'react';
import {
  Route,
} from 'react-router-dom';

import Main from './main';

export default function BasicExample() {
  return (
      <Route exact path="/">
        <Main />
      </Route>
  );
}


