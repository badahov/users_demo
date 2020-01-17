'use strict';

import React from 'react';
import classNames from 'classnames';

import './css/index.css';

const Filter = (props) => {
  const classes = classNames('row-table-filter', props.className);

  return (<div className={classes}>{props.children}</div>);
};

export default Filter;
