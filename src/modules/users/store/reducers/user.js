'use strict';

import {combineForms} from 'react-redux-form';
import config from '../../config';

const MODEL = config.model.toUpperCase();

const actionReducers = status => (state = null, action) => {
    if (status.includes(action.type)) {
        return action.data;
    } else {
        return state;
    }
};

export default combineForms({
    loading:  actionReducers([
        `${MODEL}_ITEMS_LOADING`,
        `${MODEL}_DELETE_LOADING`
    ]),
    items: actionReducers([
        `${MODEL}_ITEMS_LOADED`
    ]),
    save: actionReducers([
        `${MODEL}_ADD_LOADED`
    ]),
    header: actionReducers([
        `${MODEL}_HEADER_LOADED`
    ]),
    current: actionReducers([
        `${MODEL}_CURRENT_LOADED`
    ])
}, config.model);
