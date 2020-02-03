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

  const dragAndDrop = (moveEm) => {
    const moveElement = moveEm.target;

    const coords = getCoords(moveElement);
    const shiftX = moveEm.pageX - coords.left;
    const shiftY = moveEm.pageY - coords.top;

    moveElement.style.position = 'absolute';
    document.body.appendChild(moveElement);

    moveElement.style.zIndex = 1000;

    const enterDroppable = (elem) => {
      elem.style.background = 'pink';
    };

    const leaveDroppable = (elem) => {
      elem.style.background = '';
    };

    const decrease = (elem) => {
      elem.style.width = `${elem.clientWidth / 2}px`;
      elem.style.height = `${elem.clientHeight / 2}px`;

      moveElement.style.left = `${elem.pageX + shiftX}px`;
      moveElement.style.top = `${elem.pageY + shiftY}px`;

      console.log('elem', elem.clientWidth, elem.clientHeight);
    };

    const moveAt = (em) => {
      moveElement.style.left = `${em.pageX - shiftX}px`;
      moveElement.style.top = `${em.pageY - shiftY}px`;

      moveElement.hidden = true;
      const elemBelow = document.elementFromPoint(em.clientX, em.clientY);
      moveElement.hidden = false;

      if (!elemBelow) return;

      const droppableBelow = elemBelow.closest('.item');
      if (currentDroppable !== droppableBelow) {
        if (currentDroppable) {
          // логика обработки процесса "вылета" из droppable (удаляем подсветку)
          leaveDroppable(currentDroppable);
        }
        currentDroppable = droppableBelow;
        if (currentDroppable) {
          // У элемента посылки есть тип
          if (em.target.hasAttribute('data-type')) {
            console.log('посылка');

            // У элемента получателя есть тип
          } else if (currentDroppable.hasAttribute('data-type')) {
            console.log('получатель');

            // Типов нет
          } else {
            // Приоритет посылки
            let priority1 = em.target.getAttribute('data-priority');
            // Приоритет получателя
            let priority2 = currentDroppable.getAttribute('data-priority');

            console.log(priority1, priority2);

            decrease(em.target);

            em.target.setAttribute('data-type', 'child');
          }

          // console.log('elem', em.target.id, em.target.getAttribute('data-priority'));
          // console.log('currentDroppable', currentDroppable.id, currentDroppable.getAttribute('data-priority'));

          // логика обработки процесса, когда мы "влетаем" в элемент droppable
          enterDroppable(currentDroppable);
        }
      }
    };

    document.onmousemove = (me) => {
      moveAt(me);
    };

    moveElement.onmouseup = () => {
      document.onmousemove = null;
      moveElement.onmouseup = null;
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
      data-priority={priority}
    >
      {id} / {priority}
    </div>
  );
};

export default Item;
