'use strict';

import Query from 'modules/app/component/core/query';
import config from "../../config";

const api = config.api;

function query (pointApi, data, type = Query.post) {
    return new Query({
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
            return query(api.permission, data, Query.get).result();
        case 'switch':
            return query(api.rolePermission, data, Query.post).result().then((json) => {
                if (json) {
                    return query(api.permission, {id: data.role_id}, Query.get).result();
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
            return query(api.roles, data, Query.get).result();
        case 'add':
            return query(api.roleAdd, data, Query.post).result().then((json) => {
                if (json) {
                    return query(api.roles).result();
                }
            });
        case 'edit':
            return query(api.roleEdit, data, Query.post).result().then((json) => {
                if (json) {
                    return query(api.roles).result(callback);
                }
            });
        case 'delete':
            return query(api.roleDelete, data, Query.post).result(callback).then((json) => {
                if (json) {
                    return query(api.roles).result();
                }
            });
    }
}
