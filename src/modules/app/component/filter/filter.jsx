'use strict';

import React, { Component } from 'react';

import "./lib/filterdata/table.filter.css";

export default class Filter extends Component {
    render() {
        return (
            <div className="row-table-filter">
                {this.props.children}
            </div>
        )
    }
}
