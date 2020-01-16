'use strict';

import React, { Component } from 'react';
import classNames from "classnames";

import "./lib/filterdata/table.filter.css";

const Filter = props => {
    const classes  = classNames('row-table-filter', props.className);

    return (<div className={classes}>{props.children}</div>)
};

export default Filter;
