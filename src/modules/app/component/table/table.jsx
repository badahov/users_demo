'use strict';

import React from 'react';
import classNames from "classnames";

import './css';

const Table = props => {
    const classes  = classNames(props.className, props.overlayClassName, {
        'table-striped': props.striped,
        'table-middle': props.middle,
        'table-responsive': props.responsive,
    });

    return (
      <table className={classes}>
          <thead className='table-thead'>
          <tr>
              {
                  (props.thead) ?
                    props.thead.map((item, i) => item)
                    : null
              }
          </tr>
          </thead>
          <tbody>
          {props.children}
          </tbody>
      </table>
    )
};

Table.defaultProps = {
    striped: true,
    middle: true,
    responsive: true,
    className: 'table table-filter',
    overlayClassName: null
};

export default Table;
