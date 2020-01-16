'use strict';

import React, {useState, useEffect} from 'react';
import Input from 'antd/lib/input';

const Search = props => {
    const [maxWidth, setMaxWidth] = useState((props.maxWidth) ? props.maxWidth : 0);
    const [minWidth, setMinWidth] = useState((props.minWidth) ? props.minWidth : 0);

    const textInput = props.inputRef ? props.inputRef : React.createRef();

    useEffect(() => {
        if (props.value) {
            let placeholder = textInput.current.props.placeholder;
            const parent = textInput.current.input.parentElement;

            let is_placeholder = (parent.querySelector(".placeholder") === null) ? false : true;

            if (!is_placeholder) {
                parent.insertAdjacentHTML('beforeend', '<div class="placeholder">' + placeholder + '</div>');
                textInput.current.input.placeholder = '';

                textInput.current.input.setAttribute("style", "border-bottom: 1px solid #ac2925;");
            }
        }
    }, [props.value]);

    function handlerFocus(ev) {
        const { placeholder, parentElement } = ev.target;

        let is_placeholder = (parentElement.querySelector(".placeholder") === null) ? false : true;
        if (!is_placeholder) {
            //beforebegin, afterbegin, beforeend, afterend
            parentElement.insertAdjacentHTML('beforeend', '<div class="placeholder">' + placeholder + '</div>');
            ev.target.placeholder = '';
        }

        ev.target.setAttribute("style", "border-bottom: 1px solid #ac2925;");
    }

    function handlerBlur(ev) {
        const { value, parentElement } = ev.target;

        if (value.length === 0) {
            let is_placeholder = (parentElement.querySelector(".placeholder") === null) ? false : true;
            if (is_placeholder) {
                let placeholder = parentElement.querySelector(".placeholder").textContent;
                ev.target.placeholder = placeholder;
                parentElement.querySelector(".placeholder").remove();
            }

            ev.target.setAttribute("style", "border-bottom: 1px solid #e5e6e7;");
        }
    }

    function handleChange(ev) {
        const { value } = ev.target;
        props.callback(props.model, value);
    }

    let style = {};
    if (maxWidth) {
        style.minWidth = maxWidth + 'px'
    }

    if (maxWidth) {
        style.maxWidth = minWidth + 'px'
    }

    return (
      <div className="cell" style={style}>
          <Input key="input-search" ref={textInput} value={props.value} onFocus={handlerFocus} onBlur={handlerBlur} onChange={handleChange} className="filter-search" placeholder={props.placeholder} />
      </div>
    )
};

export default Search;