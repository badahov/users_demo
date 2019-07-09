'use strict';

import ReactQuery from 'modules/app/component/core/query';
import config from '../../config';

function query (pointApi, data, type = ReactQuery.post) {
    return new ReactQuery({
        pointApi: pointApi,
        type: type,
        data: data
    });
}

export function modelUser(action, data, callback)
{
    const api = config.api;

    switch (action) {
        case 'header':
            return {
                code: (data.code !== 0)? data.code : '',
                name: (data.name !== 0)? data.name : '',
                login: (data.login !== 0)? data.login : '',
                status: (data.status == 0)? "0" : "1"
            };
        case 'items':
            let queryItems = new ReactQuery({
                pointApi: api.items,
                data: data
            });

            return queryItems.result();
        case 'delete':
            return query(api.delete, data, ReactQuery.post).result(callback).then((json) => {
                if (json) {
                    return query(api.items).result();
                }
            });
        case 'add':
            return query(api.add, data, ReactQuery.post).result(callback).then((json) => {
                if (json) {
                    return query(api.items).result();
                }
            });
        case 'current':
            let queryCurrent = new ReactQuery({
                domain: process.env['API_AUTH'],
                type: ReactQuery.get,
                pointApi: api.current
            });

            return queryCurrent.result();
    }
}
