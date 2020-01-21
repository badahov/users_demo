import React from 'react';
import PropTypes from 'prop-types';

const Text = (props) => {
  const { children } = props;

  return (
    <div className="cell">
      <div className="filter-text">{children}</div>
    </div>
  );
};

Text.defaultProps = {
  children: '',
};

Text.propTypes = {
  children: PropTypes.string,
};

export default Text;
