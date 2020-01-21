import Query from '../app/component/core/query';
import appConfig from '../../config';

const entryPoints = {
  items: 'interface-users/items',
  delete: 'interface-users/user-delete',
  add: 'interface-users/user-add',
  current: 'interface-users/user-current',
};

const typeGet = 'GET';
const typePost = 'POST';

function query(pointApi, data, type = typePost) {
  return new Query({
    pointApi,
    type,
    data,
  });
}

export default function api(action, data, callback) {
  switch (action) {
    case 'userHeader':
      return {
        code: (data.code !== 0) ? data.code : '',
        name: (data.name !== 0) ? data.name : '',
        login: (data.login !== 0) ? data.login : '',
        status: (data.status === 0) ? '0' : '1',
      };
    case 'userItems':
      return (new Query({
        data,
        pointApi: entryPoints.items,
      })).result();
    case 'userDelete':
      return query(entryPoints.delete, data).result(callback);
    case 'userAdd':
      return query(entryPoints.add, data).result(callback);
    case 'userCurrent':
      return (new Query({
        domain: appConfig.domain.auth,
        type: typeGet,
        pointApi: entryPoints.current,
      })).result();
    default:
      return null;
  }
}
