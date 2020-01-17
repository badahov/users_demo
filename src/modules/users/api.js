'use strict';

import { Query } from 'modules/app/core';

import appConfig from 'config';

const entryPoints = {
  items: 'interface-users/items',
  delete: 'interface-users/user-delete',
  add: 'interface-users/user-add',
  current: 'interface-users/user-current'
};

function query(pointApi, data, type = Query.post) {
  return new Query({
    pointApi: pointApi,
    type: type,
    data: data
  });
}

export default function api(action, data, callback) {
  switch (action) {
    case 'userHeader':
      return {
        code: (data.code !== 0) ? data.code : '',
        name: (data.name !== 0) ? data.name : '',
        login: (data.login !== 0) ? data.login : '',
        status: (data.status === 0) ? '0' : '1'
      };
    case 'userItems':
      let queryItems = new Query({
        pointApi: entryPoints.items,
        data: data
      });

      return queryItems.result();
    case 'userDelete':
      return query(entryPoints.delete, data, Query.post).result(callback).then((json) => {
        if (json) {
          return query(entryPoints.items).result();
        }
      });
    case 'userAdd':
      return query(entryPoints.add, data, Query.post).result(callback).then((json) => {
        if (json) {
          return query(entryPoints.items).result();
        }
      });
    case 'userCurrent':
      let queryCurrent = new Query({
        domain: appConfig.domain.auth,
        type: Query.get,
        pointApi: entryPoints.current
      });

      return queryCurrent.result();
  }
}
