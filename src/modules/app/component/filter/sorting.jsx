'use strict';

import React from 'react';
import Button from 'antd/lib/button';

const Sorting = props => {
  let classElement = 'cell-2';

  const handlerClick = (ev) => {
    let up, down;
    let sortArr = [];

    let element = ev.target.parentElement;
    let sortClass = element.className;
    let sortId = element.id;

    if (typeof (sortId) !== 'undefined') {
      let parent = ev.target.parentElement.parentElement.parentElement.parentElement;
      let cell = parent.querySelectorAll(`div.${classElement}`);

      cell.forEach((item) => {
        if (item.id !== sortId) {

          up = item.querySelector('.sorted-up');
          down = item.querySelector('.sorted-down');

          up.style.display = 'inline';
          down.style.display = 'inline';

          item.classList.remove('sorting_desc', 'sorting_asc');
          item.classList.add('sorting');
        }
      });

      switch (sortClass) {
        case classElement + ' sorting':

          up = element.querySelector('.sorted-up');
          down = element.querySelector('.sorted-down');

          up.style.display = 'none';
          down.style.display = 'inline';

          element.classList.remove('sorting');
          element.classList.add('sorting_desc');

          down.focus();

          sortArr.push({ name: props.id, status: 'desc' });
          break;
        case classElement + ' sorting_asc':

          up = element.querySelector('.sorted-up');
          down = element.querySelector('.sorted-down');

          up.style.display = 'none';
          down.style.display = 'inline';

          element.classList.remove('sorting_asc');
          element.classList.add('sorting_desc');

          down.focus();

          sortArr.push({ name: props.id, status: 'desc' });
          break;
        case classElement + ' sorting_desc':
          up = element.querySelector('.sorted-up');
          down = element.querySelector('.sorted-down');

          up.style.display = 'inline';
          down.style.display = 'none';

          element.classList.remove('sorting_desc');
          element.classList.add('sorting_asc');

          up.focus();

          sortArr.push({ name: props.id, status: 'asc' });
          break;
      }

      props.fsort(sortArr);
    }
  };

  return (
    <div
      className="cell-2 sorting"
      onClick={handlerClick}
      id={props.id}
      aria-controls="DataTables_Table_1"
    >
      <Button type="link" icon="caret-up" className="sorted-up"/>
      <Button type="link" icon="caret-down" className="sorted-down"/>
    </div>
  );
};

export default Sorting;
