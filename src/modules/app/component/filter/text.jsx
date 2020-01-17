'use strict';

import React from 'react';

const Text = (props) => {
  return (
    <div className='cell'>
      <div className='filter-text'>{props.children}</div>
    </div>
  );
};

export default Text;
