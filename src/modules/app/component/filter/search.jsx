import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Input from 'antd/lib/input';

const Search = (props) => {
  const {
    maxWidth,
    minWidth,
    value: setValue,
    model,
    callback,
    placeholder: setPlaceholder,
    isFocus,
  } = props;

  const addPlaceholder = (element, placeholder) => {
    // beforebegin, afterbegin, beforeend, afterend
    element.insertAdjacentHTML(
      'beforeend',
      `<div class="placeholder">${placeholder}</div>`,
    );
  };

  const findSelector = '.placeholder';

  const isSelector = (element, selecors) => (element.querySelector(selecors) === null);

  const inputRef = React.createRef();

  useEffect(() => {
    if (isFocus) {
      inputRef.current.focus();
    }

    if (setValue) {
      const {
        props: {
          placeholder,
        },
        input: {
          parentElement,
        },
      } = inputRef.current;

      const isPlaceholder = isSelector(parentElement, findSelector);

      if (isPlaceholder) {
        addPlaceholder(parentElement, placeholder);

        inputRef.current.input.placeholder = '';
        inputRef.current.input.setAttribute('style', 'border-bottom: 1px solid #ac2925;');
      }
    }
  }, [setValue]);

  const handlerFocus = (ev) => {
    const { placeholder, parentElement } = ev.target;

    const isPlaceholder = isSelector(parentElement, findSelector);
    if (isPlaceholder) {
      addPlaceholder(parentElement, placeholder);

      ev.target.setAttribute('placeholder', '');
    }

    ev.target.setAttribute('style', 'border-bottom: 1px solid #ac2925;');
  };

  const handlerBlur = (ev) => {
    const { value, parentElement } = ev.target;

    if (value.length === 0) {
      const isPlaceholder = isSelector(parentElement, findSelector);
      if (!isPlaceholder) {
        const placeholder = parentElement.querySelector(findSelector).textContent;
        ev.target.setAttribute('placeholder', placeholder);

        parentElement.querySelector(findSelector).remove();
      }

      ev.target.setAttribute('style', 'border-bottom: 1px solid #e5e6e7;');
    }
  };

  const handleChange = (ev) => {
    const { value } = ev.target;
    callback(model, value);
  };

  const style = {};
  if (maxWidth) {
    style.minWidth = `${maxWidth}px`;
  }

  if (maxWidth) {
    style.maxWidth = `${minWidth}px`;
  }

  return (
    <div className="cell" style={style}>
      <Input
        key="input-search"
        ref={inputRef}
        value={setValue}
        onFocus={handlerFocus}
        onBlur={handlerBlur}
        onChange={handleChange}
        className="filter-search"
        placeholder={setPlaceholder}
      />
    </div>
  );
};

Search.defaultProps = {
  maxWidth: 0,
  minWidth: 0,
  value: null,
  placeholder: '',
  isFocus: false,
};

Search.propTypes = {
  model: PropTypes.string.isRequired,
  maxWidth: PropTypes.number,
  minWidth: PropTypes.number,
  placeholder: PropTypes.string,
  callback: PropTypes.func.isRequired,
  value: PropTypes.string,
  isFocus: PropTypes.bool,
};

export default Search;
