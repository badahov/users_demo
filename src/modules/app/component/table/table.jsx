'use strict';

import React, {Component} from 'react';
import classNames from "classnames";

import './less/table.less';

class TheadItem extends React.Component {
    render() {
        const classes  = classNames('t-head-item', 't-head-item-' + this.props.id);

        return (
            <th className={classes}>
                {this.props.children}
            </th>
        )
    }
}

export default class Table extends Component
{
    static defaultProps = {
        striped: true,
        middle: true,
        responsive: true,
        className: 'table table-filter',
        overlayClassName: null
    };

    render() {
        const classes  = classNames(this.props.className, this.props.overlayClassName, {
            'table-striped': this.props.striped,
            'table-middle': this.props.middle,
            'table-responsive': this.props.responsive,
        });

        return (
            <table className={classes}>
                <thead className='table-thead'>
                    <tr>
                    {
                        (this.props.thead) ?
                            this.props.thead.map((item, i) => <TheadItem key={i} id={i}>{item}</TheadItem>)
                        : null
                    }
                    </tr>
                </thead>
                <tbody>
                    {this.props.children}
                </tbody>
            </table>
        )
    }
}
