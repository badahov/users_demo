'use strict';

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router';

import { Pagination as PaginationAntd } from 'antd';

class Item extends Component
{
    static propTypes = {
        url: PropTypes.string.isRequired,
        query: PropTypes.object.isRequired
    };

    render() {
        return (
            <Link query={this.props.query} to={{ pathname: this.props.url, query: this.props.query }} className={this.props.className}>{this.props.children}</Link>
        )
    }
}

class Items extends Component
{
    static propTypes = {
        total: PropTypes.number.isRequired,
        page_size: PropTypes.number.isRequired,
        current: PropTypes.number.isRequired,
        query: PropTypes.object.isRequired,
        url: PropTypes.string.isRequired,
    };

    handlePrevLoading = () =>
    {
        this.props.onQuery(this.props.prev_page_query);
    };

    handleNextLoading = () =>
    {
        this.props.onQuery(this.props.next_page_query);
    };

    handleChange = (page, pageSize) => {
        this.props.onQuery({page, ...this.props.query});
    };

    itemRender = (current, type, originalElement) => {
        return <Item
            type={type}
            className={originalElement.props.className}
            children={originalElement.props.children}
            query={{page: current, ...this.props.query}}
            url={this.props.url}
        />;
    };

    render() {
        return (
            <PaginationAntd total={this.props.total} pageSize={this.props.page_size} current={this.props.current} onChange={this.handleChange} itemRender={this.itemRender} />
        )
    }
}

export default class Pagination extends Component
{
    static propTypes = {
        url: PropTypes.string.isRequired,
        data: PropTypes.object.isRequired,
        onQuery: PropTypes.func.isRequired,
    };

    render() {
        const {data, url, onQuery} = this.props;

        const query = Array.isArray(data.query) ? {} : data.query;

        if (data.total >= data.page_size) {
            return (<Items
                key='paginate-1'
                total={data.total}
                page_size={data.page_size}
                current={parseInt(data.current)}
                query={query}
                page_url={data.page_url}
                url={url ? url : '/'}

                onQuery={onQuery}
            />)
        } else {
            return null
        }
    }
}
