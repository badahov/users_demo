'use strict';

import React from 'react';

import { Field } from 'react-redux-form';

export default class Search extends React.Component
{
    constructor(props) {
        super(props);
        this.textInput = React.createRef();
    }

    handlerFocus = ev => {
        let placeholder = ev.target.placeholder;

        let is_placeholder = (ev.target.parentElement.querySelector(".placeholder") === null) ? false : true;
        if (!is_placeholder) {
            //beforebegin, afterbegin, beforeend, afterend
            ev.target.parentElement.insertAdjacentHTML('beforeend', '<div class="placeholder">' + placeholder + '</div>');
            ev.target.placeholder = '';
        }

        ev.target.setAttribute("style", "border-bottom: 1px solid #ac2925;");
    };

    handlerBlur = ev => {
        let val = ev.target.value;

        if (val.length === 0) {
            let is_placeholder = (ev.target.parentElement.querySelector(".placeholder") === null) ? false : true;
            if (is_placeholder) {
                let placeholder = ev.target.parentElement.querySelector(".placeholder").textContent;
                ev.target.placeholder = placeholder;
                ev.target.parentElement.querySelector(".placeholder").remove();
            }

            ev.target.setAttribute("style", "border-bottom: 1px solid #e5e6e7;");
        }
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.value) {
            let placeholder = this.textInput.current.placeholder;

            const parent = this.textInput.current.parentElement;

            let is_placeholder = (parent.querySelector(".placeholder") === null) ? false : true;
            if (!is_placeholder) {
                parent.insertAdjacentHTML('beforeend', '<div class="placeholder">' + placeholder + '</div>');
                this.textInput.current.placeholder = '';

                this.textInput.current.setAttribute("style", "border-bottom: 1px solid #ac2925;");
            }
        }
    }

    shouldComponentUpdate = (nextProps, nextState) => {
        return nextProps.value !== this.props.value;
    };

    render() {
        const width = (this.props.width) ? this.props.width : 0;

        return (
            <div className="cell" style={{minWidth: width + 'px'}}>
                <Field model={this.props.model}>
                    <input key="input-search" ref={this.textInput} onFocus={this.handlerFocus} onBlur={this.handlerBlur} style={{minWidth: width + 'px'}} className="filter-search" placeholder={this.props.placeholder} type="text" />
                </Field>
            </div>
        )
    }
}
