import React from 'react';

/**
 * @todo при замыкании рекурсии на 100й итерации перейти на алгоритм заполнения рюгзака
 * @param props
 * @returns {*}
 * @constructor
 */
const Item = (props) => {
  const {
    id,
    priority,
    color,
    top,
    left,
    height,
    width,
  } = props;

  const style = {
    width,
    height,
    top,
    left,
    backgroundColor: color,
    border: '1px solid black',
    position: 'absolute',
  };

  let currentDroppable = null;

  const getCoords = (elem) => {
    const box = elem.getBoundingClientRect();
    return {
      top: box.top + window.pageYOffset,
      left: box.left + window.pageXOffset,
    };
  };

  const dragAndDrop = (e) => {
    const element = e.target;

    const coords = getCoords(element);
    const shiftX = e.pageX - coords.left;
    const shiftY = e.pageY - coords.top;

    element.style.position = 'absolute';
    document.body.appendChild(element);

    element.style.zIndex = 1000;

    const enterDroppable = (elem) => {
      elem.style.background = 'rad';
    };

    const leaveDroppable = (elem) => {
      elem.style.background = '';
    };

    const moveAt = (em) => {
      element.style.left = `${em.pageX - shiftX}px`;
      element.style.top = `${em.pageY - shiftY}px`;

      element.hidden = true;
      const elemBelow = document.elementFromPoint(em.clientX, em.clientY);
      element.hidden = false;

      if (!elemBelow) return;

      const droppableBelow = elemBelow.closest('.item');
      if (currentDroppable !== droppableBelow) {
        if (currentDroppable) {
          // логика обработки процесса "вылета" из droppable (удаляем подсветку)
          leaveDroppable(currentDroppable);
        }
        currentDroppable = droppableBelow;
        if (currentDroppable) {
          // логика обработки процесса, когда мы "влетаем" в элемент droppable
          enterDroppable(currentDroppable);
        }
      }
    };

    document.onmousemove = (me) => {
      moveAt(me);
    };

    element.onmouseup = () => {
      document.onmousemove = null;
      element.onmouseup = null;
    };
  };

  return (
    // eslint-disable-next-line jsx-a11y/interactive-supports-focus
    <div
      style={style}
      id={`item-${id}`}
      role="link"
      className="item"
      onMouseDown={dragAndDrop}
    >
      {id}
      {priority}
    </div>
  );
};

export default Item;
