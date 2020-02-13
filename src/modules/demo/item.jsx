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
    border: '2px solid black',
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

  const dragAndDrop = (overObject) => {
    const overNode = overObject.target;

    // console.log('overNode.parentElement', overNode.parentElement.closest('.item'));

    const coords = getCoords(overNode);
    const shiftX = overObject.pageX - coords.left;
    const shiftY = overObject.pageY - coords.top;

    overNode.style.position = 'absolute';
    document.body.appendChild(overNode);

    overNode.style.zIndex = 1000;

    // overNode.hasAttribute('data-type')

    const handler1 = () => {
      alert('Спасибо!');
    };

    const handler2 = () => {
      alert('Спасибо ещё раз!');
    };

    overNode.addEventListener("click", handler1); // Спасибо!
    overNode.addEventListener("click", handler2);

    const enterDroppable = (belowNode) => {
      belowNode.setAttribute('data-type', 'below');
      overNode.setAttribute('data-type', 'over');

      belowNode.style.background = 'pink';
    };

    const leaveDroppable = (belowNode) => {
      belowNode.style.background = 'white';
    };

    const moveAt = (mouseObject) => {
      overNode.style.left = `${mouseObject.pageX - shiftX}px`;
      overNode.style.top = `${mouseObject.pageY - shiftY}px`;

      overNode.hidden = true;
      const elemBelow = document.elementFromPoint(mouseObject.clientX, mouseObject.clientY);
      overNode.hidden = false;

      if (!elemBelow) return;

      // console.log('elemBelow', elemBelow);

      // Элемент ниже
      const droppableBelow = elemBelow.closest('.item');

      if (currentDroppable !== droppableBelow) {
        if (currentDroppable) {
          // логика обработки процесса "вылета" из droppable (удаляем подсветку)
          leaveDroppable(currentDroppable);

          // console.log(droppableBelow);

          overNode.removeAttribute('data-type');
        }
        currentDroppable = droppableBelow;
        if (currentDroppable) {
          // У элемента посылки есть тип
          if (mouseObject.target.hasAttribute('data-type')) {
            console.log('посылка');

            // У элемента получателя есть тип
          } else if (currentDroppable.hasAttribute('data-type')) {
            console.log('получатель');

            // Типов нет
          } else {
            // // Приоритет посылки
            // let priority1 = moveElement.target.getAttribute('data-priority');
            // // Приоритет получателя
            // let priority2 = currentDroppable.getAttribute('data-priority');
            //
            // console.log(priority1, priority2);
            //
            // // decrease(moveElement.target);
            //
            // moveElement.target.setAttribute('data-type', 'child');
          }

          // console.log('elem', moveElement.target.id, moveElement.target.getAttribute('data-priority'));
          // console.log('currentDroppable', currentDroppable.id, currentDroppable.getAttribute('data-priority'));

          // логика обработки процесса, когда мы "влетаем" в элемент droppable
          enterDroppable(currentDroppable);
        }
      }
    };

    document.onmousemove = (me) => {
      moveAt(me);
    };

    overNode.onmouseup = () => {
      const scrollHeight = Math.max(
        overNode.scrollHeight,
        overNode.offsetHeight,
        overNode.clientHeight,
      );

      const scrollWidth = Math.max(
        overNode.scrollWidth,
        overNode.offsetWidth,
        overNode.clientWidth,
      );

      // console.log('overNode.children', overNode.firstChild);
      // console.log('overNode.children', overNode.firstParent);
      // console.log('currentDroppable.children', currentDroppable.firstChild);

      if (currentDroppable) {
        // currentDroppable.append(overNode);
        // currentDroppable.style.position = 'relative';
        // overNode.style.position = null;

        overNode.style.width = `${scrollWidth / 2}px`;
        overNode.style.height = `${scrollHeight / 2}px`;

        overNode.style.top = `${currentDroppable.offsetTop + 10}px`;
        overNode.style.left = `${currentDroppable.offsetLeft + 10}px`;

        // document.body.removeChild(currentDroppable);
      } else if (overNode.getAttribute('data-type')) {
        overNode.removeAttribute('data-type');

        overNode.style.width = `${scrollWidth * 2}px`;
        overNode.style.height = `${scrollHeight * 2}px`;

        overNode.style.background = 'white';
      }

      document.onmousemove = null;
      overNode.onmouseup = null;
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
