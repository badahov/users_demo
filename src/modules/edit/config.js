'use strict';

export default {
    model: 'edit',
    api: {
        item:    'interface-users/user',
        edit:    'interface-users/user-edit',
        current: 'interface-users/user-current'
    },
    middleware: [
        'USER_ITEM',
        'USER_CURRENT',
    ]
}
