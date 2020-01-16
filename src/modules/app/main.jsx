import React from 'react';
import PropTypes from 'prop-types';

import "modules/app/css/animate.css";

import "antd/dist/antd.css";

import './css/main.less';

const Inbox = (props) => {
    const { children } = props;

    return (
      <div className="theme-user">
          {children}
      </div>
    );
};

Inbox.propTypes = {
    children: PropTypes.element.isRequired,
};

export default Inbox;
