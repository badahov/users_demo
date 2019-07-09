import { modelPermission, modelRole } from '../api/role';

export function permission(action, data, callback) {
    return {
        type: 'PERMISSION',
        actions: ['PERMISSION_LOADING', 'PERMISSION_LOADED', 'PERMISSION_LOAD_FAILURE'],
        promise: modelPermission(action, data, callback),
    };
}

export function role(action, data, callback) {
    return {
       type: 'ROLE',
       actions: ['ROLE_LOADING', 'ROLE_LOADED', 'ROLE_LOAD_FAILURE'],
       promise: modelRole(action, data, callback),
    };
}
