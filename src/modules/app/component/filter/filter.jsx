import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './css/index.css';

const Filter = (props) => {
  const { children, className } = props;

  const classes = classNames('row-table-filter', className);

  return (<div className={classes}>{children}</div>);
};

Filter.defaultProps = {
  className: '',
};

Filter.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  className: PropTypes.string,
};

export default Filter;
