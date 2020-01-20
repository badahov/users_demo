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

Text.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Text;
