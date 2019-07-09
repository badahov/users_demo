'use strict';

import ReactQuery from 'modules/app/component/core/query';

function query (pointApi, data, type = ReactQuery.post) {
    return new ReactQuery({
        pointApi: pointApi,
        type: type,
        data: data
    });
}

/**
 * Управление разрешениями
 *
 * @param action
 * @param data
 * @param callback
 * @returns {*}
 */
export function modelPermission(action, data, callback)
{
    switch (action) {
        case 'item':
            return query('interface-users/permission', data, ReactQuery.get).result();
        case 'switch':
            return query('interface-users/role-permission', data, ReactQuery.post).result().then((json) => {
                if (json) {
                    return query('interface-users/permission', {id: data.role_id}, ReactQuery.get).result();
                }
            });
    }
}

/**
 * Управление ролями
 *
 * @param action
 * @param data
 * @param callback
 * @returns {*}
 */
export function modelRole(action, data = {}, callback)
{
    switch (action) {
        case 'items':
            return query('interface-users/roles', data, ReactQuery.get).result();
        case 'add':
            return query('interface-users/role-add', data, ReactQuery.post).result().then((json) => {
                if (json) {
                    return query('interface-users/roles').result();
                }
            });
        case 'edit':
            return query('interface-users/role-edit', data, ReactQuery.post).result().then((json) => {
                if (json) {
                    return query('interface-users/roles').result(callback);
                }
            });
        case 'delete':
            return query('interface-users/role-delete', data, ReactQuery.post).result(callback).then((json) => {
                if (json) {
                    return query('interface-users/roles').result();
                }
            });
    }
}
