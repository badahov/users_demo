'use strict';

import ReactQuery from 'modules/app/component/core/query';
import config from "../../config";

const api = config.api;

export function modelCurrentUser()
{
    let ReactQueryObject = new ReactQuery({
        domain: process.env['API_AUTH'],
        type: ReactQuery.get,
        pointApi: api.userCurrent
    });

    return ReactQueryObject.result();
}

export function modelEdit(data, filter, action)
{
    let ReactQueryObject = new ReactQuery({
        pointApi: api.userEdit,
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
