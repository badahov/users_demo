'use strict';

import Query from 'modules/app/component/core/query';
import appConfig from "config";
import config from "../../config";

const api = config.api;

export function modelUser(data)
{
    let ReactQueryObject = new Query({
        pointApi: api.item,
        type: Query.get,
        data: data,
    });

    return ReactQueryObject.result();
}

export function modelCurrentUser()
{
    let ReactQueryObject = new Query({
        domain: appConfig.domain.auth,
        type: Query.get,
        pointApi: api.current,
    });

    return ReactQueryObject.result();
}

export function modelEdit(data, filter, action)
{
    let ReactQueryObject = new Query({
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
