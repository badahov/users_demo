'use strict';

import React, { Component } from 'react';

import "./lib/filterdata/filterdata";
import "./lib/filterdata/table.filter.css";

export default class Filter extends Component {

    componentDidMount = () => {
        $('.sorting').filter_data({
            fsort: this.props.fsort
        });
    };

    render() {
        return (
            <div className="row-table-filter">
                {this.props.children}
            </div>
        )
    }
}
