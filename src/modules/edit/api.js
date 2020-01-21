import Query from '../app/component/core/query';
import appConfig from '../../config';

const entryPoints = {
  item: 'interface-users/user',
  edit: 'interface-users/user-edit',
  current: 'interface-users/user-current',
};

export default function api(action, data, callback) {
  switch (action) {
    case 'userItem':
      return (new Query({
        data,
        pointApi: entryPoints.item,
        type: 'GET',
      })).result();
    case 'userCurrent':
      return (new Query({
        domain: appConfig.domain.auth,
        type: 'GET',
        pointApi: entryPoints.current
      })).result();
    case 'userEdit':
      return (new Query({
        data,
        pointApi: entryPoints.edit
      })).result();
  }
}

// export function modelEdit(data, filter, action) {
//   let ReactQueryObject = new Query({
//     pointApi: api.edit,
//     data: data,
//   });
//
//   return ReactQueryObject.result().then((json) => {
//     if (json) {
//       if (action instanceof Function) {
//         action(filter);
//       }
//     }
//   });
// }
