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
  query: PropTypes.objectOf(PropTypes.object).isRequired,
  className: PropTypes.string,
  children: PropTypes.objectOf(PropTypes.object).isRequired,
};

const Items = (props) => {
  const {
    total,
    current,
    query,
    onQuery,
    url,
    pageSize,
  } = props;

  const handleChange = (page) => {
    onQuery({ page, ...query });
  };

  const itemRender = (setCurrent, type, originalElement) => (
    <Item
      type={type}
      className={originalElement.props.className}
      query={{
        page: setCurrent,
        ...query,
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
  query: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const Index = React.memo((props) => {
  const {
    data: {
      query,
      total,
      page_size: pageSize,
      current,
    },
    url,
    onQuery,
  } = props;

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

  return null;
});

Index.defaultProps = {
  url: '/',
};

Index.propTypes = {
  url: PropTypes.string,
  onQuery: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Index;
