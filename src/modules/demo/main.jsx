import React from 'react';
import map from 'lodash/map';

import Item from './item';

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

  componentDidMount() {
    const { block } = this.state;

    const widthWindow = document.documentElement.clientWidth;
    const heightWindow = window.innerHeight;

    const items = map(block, (item) => {
      const p = this.getPos(item, block, widthWindow, heightWindow);

      item.top = p.y;
      item.left = p.x;

      return item;
    });

    this.setState({
      block: items,
    });
  }

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
      const pos = blocks[i];

      a = {
        x: pos.left,
        y: pos.top,
        x1: pos.left + pos.width,
        y2: pos.top + pos.height,
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

  intersects = (a, b) => (a.y < b.y1 || a.y1 > b.y || a.x1 < b.x || a.x > b.x1);

  getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

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

  generateColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;

  render() {
    const { block } = this.state;

    return (
      <>
        {
          (map, block, (item) => (
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
