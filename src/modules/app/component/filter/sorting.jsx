'use strict';

import React, { Component } from 'react';

export default class Sorting extends Component {

    static classElement = 'cell-2';

    handlerClick = ev => {
        let sortArr = [];

        let element   = ev.target;
        let sortClass = ev.target.className;
        let sortId    = ev.target.id;

        if (typeof(sortId) !== 'undefined') {
            let parent = ev.target.parentElement.parentElement.parentElement.parentElement;
            let cell   = parent.querySelectorAll(`div.${Sorting.classElement}`);

            cell.forEach((item) => {
                if (item.id !== sortId) {
                    item.classList.remove("sorting_desc","sorting_asc");
                    item.classList.add("sorting");
                }
            });

            switch(sortClass) {
                case Sorting.classElement + ' sorting':
                    element.classList.remove("sorting");
                    element.classList.add("sorting_desc");

                    this.sort_status = 'desc';

                    sortArr.push({name : this.sort_id, status : this.sort_status});
                    break;
                case Sorting.classElement + ' sorting_asc':
                    element.classList.remove("sorting_asc");
                    element.classList.add("sorting_desc");

                    this.sort_status = 'desc';

                    sortArr.push({name : this.sort_id, status : this.sort_status});
                    break;
                case Sorting.classElement + ' sorting_desc':
                    element.classList.remove("sorting_desc");
                    element.classList.add("sorting_asc");

                    this.sort_status = 'asc';

                    sortArr.push({name : this.sort_id, status : this.sort_status});
                    break;
            }

            this.props.fsort(sortArr);
        }
    };

    render() {
        return (
            <div className="cell-2 sorting" onClick={this.handlerClick} id={this.props.id} aria-controls="DataTables_Table_1"></div>
        )
    }
}
