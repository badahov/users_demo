'use strict';

export default {
    mode: 'production',
    production : {
        api: {
            items:   'interface-users/items',
            delete:  'interface-users/user-delete',
            add:     'interface-users/user-add',
            current: 'interface-users/user-current'
        }
    },
    development: {
        api: {}
    }
}