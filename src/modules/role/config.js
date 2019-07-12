'use strict';

export default {
    model: 'role',
    api: {
        permission:   'interface-users/permission',
        rolePermission:  'interface-users/role-permission',

        roles:   'interface-users/roles',
        roleAdd: 'interface-users/role-add',
        roleEdit: 'interface-users/role-edit',
        roleDelete: 'interface-users/role-delete',

        userCurrent: 'interface-users/user-current',
        userEdit: 'interface-users/user-edit',
    },
    middleware: [
        'PERMISSION',
        'ROLE',
        'USER_CURRENT',
        'USER_ITEM',
    ]
}