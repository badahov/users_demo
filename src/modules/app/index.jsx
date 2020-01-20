import React from 'react';
import PropTypes from 'prop-types';

import 'antd/dist/antd.css';

import './css/index.less';

const App = (props) => {
  const { children } = props;

  return (
    <div className="theme-user">
      {children}
    </div>
  );
};

App.propTypes = {
  children: PropTypes.element.isRequired,
};

export default App;
