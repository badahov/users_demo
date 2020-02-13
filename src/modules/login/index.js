import React from 'react';
import PropTypes, { any } from 'prop-types';
import {
  Route,
} from 'react-router-dom';

import Main from './main';

const LoginRoute = () => <Route exact path="/login"><Main /></Route>;

LoginRoute.defaultProps = {
  location: null,
};

LoginRoute.propTypes = {
  location: PropTypes.shape({
    hash: PropTypes.string.isRequired,
    pathname: PropTypes.string.isRequired,
    search: PropTypes.string.isRequired,
    state: any,
  }),
};

export default LoginRoute;
