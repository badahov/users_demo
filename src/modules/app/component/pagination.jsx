'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

import PaginationAntd from 'antd/lib/pagination';

const Item = (props) => {
  return (
    <Link query={props.query} to={{ pathname: props.url, query: props.query }}
          className={props.className}>{props.children}</Link>
  );
};
Item.propTypes = {
  type: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  query: PropTypes.object.isRequired,
  className: PropTypes.string,
};

const Items = (props) => {
  function handleChange(page, pageSize) {
    props.onQuery({ page, ...props.query });
  }

  const itemRender = (current, type, originalElement) => {
    return <Item
      type={type}
      className={originalElement.props.className}
      children={originalElement.props.children}
      query={{ page: current, ...props.query }}
      url={props.url}
    />;
  };

  return (
    <PaginationAntd
      total={props.total}
      pageSize={props.page_size}
      current={props.current}
      onChange={handleChange}
      itemRender={itemRender}
    />
  );
};
Items.propTypes = {
  url: PropTypes.string.isRequired,
  onQuery: PropTypes.func.isRequired,
};

const Index = React.memo((props) => {
  const query = Array.isArray(props.data.query) ? {} : props.data.query;

  if (props.data.total >= props.data.page_size) {
    return (
      <Items
        key='paginate-1'
        total={props.data.total}
        page_size={props.data.page_size}
        current={parseInt(props.data.current)}
        query={query}
        page_url={props.data.page_url}
        url={props.url ? props.url : '/'}

        onQuery={props.onQuery}
      />
    );
  } else {
    return null;
  }
});

Index.propTypes = {
  url: PropTypes.string.isRequired,
  onQuery: PropTypes.func.isRequired,
};

export default Index;
