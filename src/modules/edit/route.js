'use strict';

export default {
    path: 'user/edit/:user_id/:page',
    getComponent(location, cb) {
        require.ensure([], (require) => {
            cb(null, require('./main').default);
        });
    }
};