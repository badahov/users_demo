import React from 'react';
import PropTypes from 'prop-types';
import isUndefined from 'lodash/isUndefined';

import Button from 'antd/lib/button';

const Sorting = (props) => {
  const { id } = props;
  const classElement = 'cell-2';

  const handlerClick = (ev) => {
    let up;
    let down;
    const sortArr = [];

    const element = ev.target.parentElement;
    const sortClass = element.className;
    const sortId = element.id;

    const sortedDown = '.sorted-down';
    const sortedUp = '.sorted-up';

    if (!isUndefined(sortId)) {
      const parent = ev.target.parentElement.parentElement.parentElement.parentElement;
      const cell = parent.querySelectorAll(`div.${classElement}`);

      for (let i = 0; i < cell.length; i += 1) {
        const item = cell[i];
        if (item.id !== sortId) {
          up = item.querySelector(sortedUp);
          down = item.querySelector(sortedDown);

          up.style.display = 'inline';
          down.style.display = 'inline';

          item.classList.remove('sorting_desc', 'sorting_asc');
          item.classList.add('sorting');
        }
      }

      if (sortClass === `${classElement} sorting`) {
        up = element.querySelector(sortedUp);
        down = element.querySelector(sortedDown);

        up.style.display = 'none';
        down.style.display = 'inline';

        element.classList.remove('sorting');
        element.classList.add('sorting_desc');

        down.focus();

        sortArr.push({ name: props.id, status: 'desc' });
      } else if (sortClass === `${classElement} sorting_asc`) {
        up = element.querySelector(sortedUp);
        down = element.querySelector(sortedDown);

        up.style.display = 'none';
        down.style.display = 'inline';

        element.classList.remove('sorting_asc');
        element.classList.add('sorting_desc');

        down.focus();

        sortArr.push({ name: props.id, status: 'desc' });
      } else if (sortClass === `${classElement} sorting_desc`) {
        up = element.querySelector(sortedUp);
        down = element.querySelector(sortedDown);

        up.style.display = 'inline';
        down.style.display = 'none';

        element.classList.remove('sorting_desc');
        element.classList.add('sorting_asc');

        up.focus();

        sortArr.push({ name: props.id, status: 'asc' });
      }

      props.fsort(sortArr);
    }
  };

  return (
    <div
      role="form"
      className="cell-2 sorting"
      id={id}
      aria-controls="DataTables_Table_1"
    >
      <Button onClick={handlerClick} onKeyDown={handlerClick} type="link" icon="caret-up" className="sorted-up" />
      <Button onClick={handlerClick} onKeyDown={handlerClick} type="link" icon="caret-down" className="sorted-down" />
    </div>
  );
};

Sorting.propTypes = {
  id: PropTypes.string.isRequired,
  fsort: PropTypes.func.isRequired,
};

export default Sorting;
