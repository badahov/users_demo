'use strict';

export default {
  model: 'user',
  api: {
    items: 'interface-users/items',
    delete: 'interface-users/user-delete',
    add: 'interface-users/user-add',
    current: 'interface-users/user-current'
  },
  middleware: [
    'USER_ADD',
    'USER_DELETE',
    'USER_ITEMS',
    'USER_CURRENT',
    'USER_HEADER'
  ]
};
