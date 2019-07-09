'use strict';

import ReactQuery from 'modules/app/component/core/query';
import config from "../../config";

const api = config.api;

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
            return query(api.permission, data, ReactQuery.get).result();
        case 'switch':
            return query(api.rolePermission, data, ReactQuery.post).result().then((json) => {
                if (json) {
                    return query(api.permission, {id: data.role_id}, ReactQuery.get).result();
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
            return query(api.roles, data, ReactQuery.get).result();
        case 'add':
            return query(api.roleAdd, data, ReactQuery.post).result().then((json) => {
                if (json) {
                    return query(api.roles).result();
                }
            });
        case 'edit':
            return query(api.roleEdit, data, ReactQuery.post).result().then((json) => {
                if (json) {
                    return query(api.roles).result(callback);
                }
            });
        case 'delete':
            return query(api.roleDelete, data, ReactQuery.post).result(callback).then((json) => {
                if (json) {
                    return query(api.roles).result();
                }
            });
    }
}
