import React from 'react';
import PropTypes from 'prop-types';
import isArray from 'lodash/isArray';

import { Link } from 'react-router';

import PaginationAntd from 'antd/lib/pagination';

const Item = (props) => {
  const {
    query,
    url,
    className,
    children,
  } = props;

  return (
    <Link
      query={query}
      to={{ query, pathname: url }}
      className={className}
    >
      {children}
    </Link>
  );
};

Item.defaultProps = {
  className: '',
};

Item.propTypes = {
  url: PropTypes.string.isRequired,
  query: PropTypes.shape({
    page: PropTypes.number.isRequired,
  }).isRequired,
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.number,
  ]).isRequired,
};

const Items = (props) => {
  const {
    total,
    current,
    onQuery,
    url,
    pageSize,
  } = props;

  const handleChange = (page) => {
    onQuery({ page });
  };

  const itemRender = (setCurrent, type, originalElement) => (
    <Item
      className={originalElement.props.className}
      query={{
        page: setCurrent,
      }}
      url={url}
    >
      {originalElement.props.children}
    </Item>
  );

  return (
    <PaginationAntd
      total={total}
      pageSize={pageSize}
      current={current}
      onChange={handleChange}
      itemRender={itemRender}
    />
  );
};

Items.propTypes = {
  total: PropTypes.number.isRequired,
  current: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired,
  onQuery: PropTypes.func.isRequired,
};

const Index = React.memo((props) => {
  const {
    data,
    url,
    onQuery,
  } = props;

  if (data) {
    const {
      query,
      total,
      page_size: pageSize,
      current,
    } = data;

    const setQuery = isArray(query) ? {} : query;

    if (total >= pageSize) {
      return (
        <Items
          total={total}
          pageSize={pageSize}
          current={Number(current)}
          query={setQuery}
          url={url}
          onQuery={onQuery}
        />
      );
    }
  }

  return null;
});

Index.defaultProps = {
  url: '/',
  data: null,
};

Index.propTypes = {
  url: PropTypes.string,
  onQuery: PropTypes.func.isRequired,
  data: PropTypes.shape({
    total: PropTypes.number.isRequired,
    current: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]).isRequired,
    next_page_query: PropTypes.shape({
      page: PropTypes.number.isRequired,
    }),
    next_page_url: PropTypes.string.isRequired,
    offset: PropTypes.number.isRequired,
    page_size: PropTypes.number.isRequired,
    page_url: PropTypes.string.isRequired,
    param: PropTypes.shape({
      current_page: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
      ]).isRequired,
      has_more_pages: PropTypes.number.isRequired,
      last_page: PropTypes.number.isRequired,
    }),
    prev_page_query: PropTypes.shape({
      page: PropTypes.number.isRequired,
    }),
    prev_page_url: PropTypes.string.isRequired,
    query: PropTypes.any,
    row: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.number.isRequired,
      query: PropTypes.shape({
        page: PropTypes.number.isRequired,
      }),
      url: PropTypes.string.isRequired,
    })),
  }),
};

export default Index;
