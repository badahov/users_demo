'use strict';

import ReactQuery from 'modules/app/component/core/query';
import config from "../../config";

const api = config.api;

export function modelUser(data)
{
    let ReactQueryObject = new ReactQuery({
        pointApi: api.item,
        type: ReactQuery.get,
        data: data,
    });

    return ReactQueryObject.result();
}

export function modelCurrentUser()
{
    let ReactQueryObject = new ReactQuery({
        domain: process.env['API_AUTH'],
        type: ReactQuery.get,
        pointApi: api.current,
    });

    return ReactQueryObject.result();
}

export function modelEdit(data, filter, action)
{
    let ReactQueryObject = new ReactQuery({
        pointApi: api.edit,
        data: data
    });

    return ReactQueryObject.result().then((json) => {
        if (json) {
            if (action instanceof Function) {
                action(filter);
            }
        }
    });
}
