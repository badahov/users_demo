'use strict';

import {modelUser} from '../api/user';
import config from "../../config";

const MODEL = config.model.toUpperCase();

export default function user(action, data, callback) {
    const actionKey = action.toUpperCase();

    return {
        type: `${MODEL}_${actionKey}`,
        actions: [`${MODEL}_${actionKey}_LOADING`,`${MODEL}_${actionKey}_LOADED`,`${MODEL}_${actionKey}_LOAD_FAILURE`],
        promise: modelUser(action, data, callback),
    };
}
