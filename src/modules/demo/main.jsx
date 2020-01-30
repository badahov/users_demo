import React from 'react';

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

    const moveAt = (em) => {
      element.style.left = em.pageX - shiftX + 'px';
      element.style.top = em.pageY - shiftY + 'px';
    };

    document.onmousemove = (e) => {
      moveAt(e);
    };

    element.onmouseup = () => {
      document.onmousemove = null;
      element.onmouseup = null;
    };
  };

  // навел
  // mouseenter
  // mouseover
  // mousemove

  // отвел
  // mouseout
  // mouseleave

  // клик
  // mousedown
  // mouseup
  // click

  // onClick onContextMenu onDoubleClick onDrag onDragEnd onDragEnter onDragExit
  // onDragLeave onDragOver onDragStart onDrop onMouseDown onMouseEnter onMouseLeave
  // onMouseMove onMouseOut onMouseOver onMouseUp

  return (
    <div
      style={style}
      id={`item-${id}`}
      className="item"
      onMouseDown={dragAndDrop}
    >
      {id} {priority}
    </div>
  );
};

class Demo extends React.Component {
  constructor(props) {
    super(props);

    const block = [];
    for (let i = 0; i < 5; i += 1) {
      const priority = this.getPriority(block);

      block.push({
        top: 0,
        left: 0,
        height: 100,
        width: 200,
        number: i,
        priority,
        color: '#fff',
      });
    }

    this.state = {
      block,
    };
  }

  generateColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;

  getPriority = (block) => {
    let priority = this.getRandomInt(25, 129);

    for (let i = 0; i < block.length; i += 1) {
      if (priority === block[i].priority) {
        priority = this.getPriority(block);
        break;
      }
    }

    return priority;
  };

  getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

  intersects = (a, b) => (a.y < b.y1 || a.y1 > b.y || a.x1 < b.x || a.x > b.x1);

  getPos = (item, blocks, width, height) => {
    let p = {
      x: 0,
      y: 0,
    };

    let result = false;

    p.x = this.getRandomInt(0, width - item.width);
    p.y = this.getRandomInt(0, height - item.height);

    let a;
    let b;

    for (let i = 0; i < blocks.length; i += 1) {
      let temp = blocks[i];

      a = {
        x: temp.left,
        y: temp.top,
        x1: temp.left + temp.width,
        y2: temp.top + temp.height,
      };

      b = {
        x: p.x,
        y: p.y,
        x1: p.x + item.width,
        y2: p.y + item.height,
      };

      result = this.intersects(a, b);
      if (!result) {
        break;
      }
    }

    if (!result) {
      p = this.getPos(item, blocks, width, height);
    }

    return p;
  };

  componentDidMount() {
    const widthWindow = document.documentElement.clientWidth;
    const heightWindow = window.innerHeight;

    const items = this.state.block.map((item) => {
      const p = this.getPos(item, this.state.block, widthWindow, heightWindow);

      item.top = p.y;
      item.left = p.x;

      return item;
    });

    this.setState({
      block: items,
    });
  }

  render() {
    const { block } = this.state;

    return (
      <>
      {
        block.map((item) => (
          <Item
            key={item.number}
            id={item.number}
            priority={item.priority}
            color={item.color}
            top={item.top}
            left={item.left}
            height={item.height}
            width={item.width}
          />
        ))
      }
      </>
    );
  }
}

export default Demo;
