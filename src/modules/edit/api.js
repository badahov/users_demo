'use strict';

import { Query } from 'modules/app/core';
import appConfig from 'config';

function query(pointApi, data, type = Query.post) {
  return new Query({
    pointApi: pointApi,
    type: type,
    data: data
  });
}

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
        type: Query.get,
      })).result();
    case 'userCurrent':
      return (new Query({
        domain: appConfig.domain.auth,
        type: Query.get,
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
