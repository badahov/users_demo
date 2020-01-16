'use strict';

import { Query } from 'modules/app/core';

import appConfig from 'config';
import config from '../../config';

function query (pointApi, data, type = Query.post) {
  return new Query({
    pointApi: pointApi,
    type: type,
    data: data
  });
}

export function modelUser (action, data, callback) {
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
        pointApi: config.api.items,
        data: data
      });

      return queryItems.result();
    case 'userDelete':
      return query(config.api.delete, data, Query.post).result(callback).then((json) => {
        if (json) {
          return query(config.api.items).result();
        }
      });
    case 'userAdd':
      return query(config.api.add, data, Query.post).result(callback).then((json) => {
        if (json) {
          return query(config.api.items).result();
        }
      });
    case 'userCurrent':
      let queryCurrent = new Query({
        domain: appConfig.domain.auth,
        type: Query.get,
        pointApi: config.api.current
      });

      return queryCurrent.result();
  }
}
