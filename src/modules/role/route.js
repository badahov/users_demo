'use strict';

export default {
    path: 'role',
    getComponent(location, cb) {
        require.ensure([], (require) => {
            cb(null, require('./main').default);
        });
    }
};