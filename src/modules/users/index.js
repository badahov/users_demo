'use strict';

export default {
    getComponent(location, cb) {
        require.ensure([], (require) => {
            cb(null, require('./main').default);
        });
    }
};