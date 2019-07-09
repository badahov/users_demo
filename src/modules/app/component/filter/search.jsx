'use strict';

import React from 'react';

import { Field } from 'react-redux-form';

export default class Search extends React.Component
{
    render() {

        const width = ( this.props.width )? this.props.width : 0;

        return (
            <div className="cell" style={{minWidth: width + 'px'}}>
                <Field model={this.props.model}>
                    <input key={123} style={{minWidth: width + 'px'}} className="filter-search" placeholder={this.props.placeholder} type="text" />
                </Field>
            </div>
        )
    }
}
