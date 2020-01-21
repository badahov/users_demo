import Query from '../app/component/core/query';
import appConfig from '../../config';

function query (pointApi, data, type = 'POST') {
  return new Query({
    pointApi,
    type,
    data,
  });
}

const entryPoints = {
  user: {
    item: 'interface-users/user',
    current: 'interface-users/user-current',
  },
  role: {
    items: 'interface-users/roles',
    add: 'interface-users/role-add',
    edit: 'interface-users/role-edit',
    delete: 'interface-users/role-delete'
  },
  permission: {
    item: 'interface-users/permission',
    switch: 'interface-users/role-permission',
  }
};

export default function api(action, data, callback) {
  switch (action) {
    case 'roleItems':
      return query(entryPoints.role.items, data, 'GET').result();
    case 'roleAdd':
      return query(entryPoints.role.add, data).result().then((json) => {
        if (json) {
          //return query(api.roles).result();
        }
      });
    case 'roleEdit':
      return query(entryPoints.role.edit, data).result().then((json) => {
        if (json) {
          //return query(api.roles).result(callback);
        }
      });
    case 'roleDelete':
      return query(entryPoints.role.delete, data).result(callback).then((json) => {
        if (json) {
          return query(api.roles).result();
        }
      });

    case 'permissionItem':
      return query(entryPoints.permission.item, data, 'GET').result();
    case 'permissionSwitch':
      return query(entryPoints.permission.switch, data).result().then((json) => {
        // if (json) {
        //   return query(api.permission, {id: data.role_id}, Query.get).result();
        // }
      });

    case 'userItem':
      return (new Query({ data, pointApi: entryPoints.item, type: 'GET', })).result();
    case 'userCurrent':
      return (new Query({
        domain: appConfig.domain.auth,
        type: 'GET',
        pointApi: entryPoints.user.current
      })).result();
    case 'userEdit':
      return (new Query({ data, pointApi: entryPoints.edit })).result();
  }
}
