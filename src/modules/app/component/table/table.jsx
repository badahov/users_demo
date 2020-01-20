import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import map from 'lodash/map';

import './css/index.less';

const Table = (props) => {
  const {
    className,
    overlayClassName,
    striped,
    middle,
    responsive,
    thead,
    children,
  } = props;

  const classes = classNames(className, overlayClassName, {
    'table-striped': striped,
    'table-middle': middle,
    'table-responsive': responsive,
  });

  return (
    <table className={classes}>
      <thead className="table-thead">
        <tr>
          {
            (thead) ? map(thead) : null
          }
        </tr>
      </thead>
      <tbody>
        {children}
      </tbody>
    </table>
  );
};

Table.defaultProps = {
  striped: true,
  middle: true,
  responsive: true,
  className: 'table table-filter',
  overlayClassName: null,
  children: [],
  thead: [],
};

Table.propTypes = {
  overlayClassName: PropTypes.string,
  striped: PropTypes.bool,
  thead: PropTypes.arrayOf(PropTypes.object),
  children: PropTypes.arrayOf(PropTypes.object),
  middle: PropTypes.bool,
  responsive: PropTypes.bool,
  className: PropTypes.string,
};

export default Table;
