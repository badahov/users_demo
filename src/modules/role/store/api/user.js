'use strict';

import ReactQuery from 'modules/app/component/core/query';

export function modelUser(data)
{
    let ReactQueryObject = new ReactQuery({
        pointApi: 'interface-users/user',
        type: ReactQuery.get,
        data: data
    });

    return ReactQueryObject.result();
}

export function modelCurrentUser()
{
    let ReactQueryObject = new ReactQuery({
        domain: process.env['API_AUTH'],
        type: ReactQuery.get,
        pointApi: 'interface-users/user-current'
    });

    return ReactQueryObject.result();
}

export function modelEdit(data, filter, action)
{
    let ReactQueryObject = new ReactQuery({
        pointApi: 'interface-users/user-edit',
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
