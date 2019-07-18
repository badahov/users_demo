'use strict';

import React, { Component } from 'react';
import { Button } from 'antd';

export default class Sorting extends Component {

    static classElement = 'cell-2';

    handlerClick = ev => {
        let sortArr = [];

        let element   = ev.target.parentElement;
        let sortClass = element.className;
        let sortId    = element.id;

        if (typeof(sortId) !== 'undefined') {
            let parent = ev.target.parentElement.parentElement.parentElement.parentElement;
            let cell   = parent.querySelectorAll(`div.${Sorting.classElement}`);

            let up, down;

            cell.forEach((item) => {
                if (item.id !== sortId) {

                    up = item.querySelector('.sorted-up');
                    down = item.querySelector('.sorted-down');

                    up.style.display   = "inline";
                    down.style.display = "inline";

                    item.classList.remove("sorting_desc","sorting_asc");
                    item.classList.add("sorting");
                }
            });

            switch(sortClass) {
                case Sorting.classElement + ' sorting':

                    up = element.querySelector('.sorted-up');
                    down = element.querySelector('.sorted-down');

                    up.style.display   = "none";
                    down.style.display = "inline";

                    element.classList.remove("sorting");
                    element.classList.add("sorting_desc");

                    this.sort_status = 'desc';

                    sortArr.push({name : this.sort_id, status : this.sort_status});
                    break;
                case Sorting.classElement + ' sorting_asc':

                    up = element.querySelector('.sorted-up');
                    down = element.querySelector('.sorted-down');

                    up.style.display   = "none";
                    down.style.display = "inline";


                    element.classList.remove("sorting_asc");
                    element.classList.add("sorting_desc");

                    this.sort_status = 'desc';

                    sortArr.push({name : this.sort_id, status : this.sort_status});
                    break;
                case Sorting.classElement + ' sorting_desc':

                    up = element.querySelector('.sorted-up');
                    down = element.querySelector('.sorted-down');

                    up.style.display   = "inline";
                    down.style.display = "none";

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
            <div className="cell-2 sorting" onClick={this.handlerClick} id={this.props.id} aria-controls="DataTables_Table_1">
                <Button type="link" icon="caret-up" className="sorted-up" />
                <Button type="link" icon="caret-down" className="sorted-down" />
            </div>
        )
    }
}
