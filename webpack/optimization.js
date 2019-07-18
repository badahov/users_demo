const path = require('path');

const ps = path.sep;
// const _node_modules = `${ps}node_modules${ps}`;
// const _users        = `${ps}src${ps}modules${ps}users`;
// const _app          = `${ps}src${ps}modules${ps}app`;
// const _login        = `${ps}src${ps}modules${ps}login`;
// const _edit         = `${ps}src${ps}modules${ps}edit`;
// const _role         = `${ps}src${ps}modules${ps}role`;

module.exports = (params = {}) => {
    const {minimize = true} = params;

    return {
        optimization: {
            minimize,
            removeEmptyChunks: false,
            splitChunks: {
                cacheGroups: {
                    'classnames': {
                        test: /[\\/]node_modules[\\/]classnames[\\/]/,
                        reuseExistingChunk: true,
                        enforce: true,
                        name: 'classnames',
                        chunks: 'all',
                        minSize: 0,
                    },
                    'js-cookie': {
                        test: /[\\/]node_modules[\\/]js-cookie[\\/]/,
                        reuseExistingChunk: true,
                        enforce: true,
                        name: 'js-cookie',
                        chunks: 'all',
                        minSize: 0,
                    },
                    'translit': {
                        test: /[\\/]node_modules[\\/]translit[\\/]/,
                        reuseExistingChunk: true,
                        enforce: true,
                        name: 'translit',
                        chunks: 'all',
                        minSize: 0,
                    },
                    'whatwg-fetch': {
                        test: /[\\/]node_modules[\\/]whatwg-fetch[\\/]/,
                        reuseExistingChunk: true,
                        enforce: true,
                        name: 'whatwg-fetch',
                        chunks: 'all',
                        minSize: 0,
                    },
                    'antd': {
                        test: /[\\/]node_modules[\\/]antd[\\/]/,
                        reuseExistingChunk: true,
                        enforce: true,
                        name: 'antd',
                        chunks: 'all',
                        minSize: 0,
                    },
                    'ant-design': {
                        test: /[\\/]node_modules[\\/]@ant-design[\\/]/,
                        reuseExistingChunk: true,
                        enforce: true,
                        name: 'ant-design',
                        chunks: 'all',
                        minSize: 0,
                    },
                    'react-redux-form': {
                        test: /[\\/]node_modules[\\/]react-redux-form[\\/]/,
                        reuseExistingChunk: true,
                        enforce: true,
                        name: 'react-redux-form',
                        chunks: 'all',
                        minSize: 0,
                    },
                    // 'core-js': {
                    //     test: /[\\/]node_modules[\\/]core-js[\\/]/,
                    //     reuseExistingChunk: true,
                    //     enforce: true,
                    //     name: 'core-js',
                    //     chunks: 'all',
                    //     minSize: 0,
                    // },
                    'redux': {
                        test: /[\\/]node_modules[\\/]redux[\\/]/,
                        reuseExistingChunk: true,
                        enforce: true,
                        name: 'redux',
                        chunks: 'all',
                        minSize: 0,
                    },
                    'redux-logger': {
                        test: /[\\/]node_modules[\\/]redux-logger[\\/]/,
                        reuseExistingChunk: true,
                        enforce: true,
                        name: 'redux-logger',
                        chunks: 'all',
                        minSize: 0,
                    },
                    'react-redux': {
                        test: /[\\/]node_modules[\\/]react-redux[\\/]/,
                        reuseExistingChunk: true,
                        enforce: true,
                        name: 'react-redux',
                        chunks: 'all',
                        minSize: 0,
                    },
                    // 'lodash': {
                    //     test: /[\\/]node_modules[\\/]lodash[\\/]/,
                    //     reuseExistingChunk: true,
                    //     enforce: true,
                    //     name: 'lodash',
                    //     chunks: 'all',
                    //     minSize: 0,
                    // },
                    'react': {
                        test: /[\\/]node_modules[\\/]react[\\/]/,
                        reuseExistingChunk: true,
                        enforce: true,
                        name: 'react',
                        chunks: 'all',
                        minSize: 0,
                    },
                    'react-dom': {
                        test: /[\\/]node_modules[\\/]react-dom[\\/]/,
                        reuseExistingChunk: true,
                        enforce: true,
                        name: 'react-dom',
                        chunks: 'all',
                        minSize: 0,
                    },
                    'react-helmet': {
                        test: /[\\/]node_modules[\\/]react-helmet[\\/]/,
                        reuseExistingChunk: true,
                        enforce: true,
                        name: 'react-helmet',
                        chunks: 'all',
                        minSize: 0,
                    },
                    'react-router': {
                        test: /[\\/]node_modules[\\/]react-router[\\/]/,
                        reuseExistingChunk: true,
                        enforce: true,
                        name: 'react-router',
                        chunks: 'all',
                        minSize: 0,
                    },
                    'redux-form-validate': {
                        test: /[\\/]node_modules[\\/]redux-form-validate[\\/]/,
                        reuseExistingChunk: true,
                        enforce: true,
                        name: 'redux-form-validate',
                        chunks: 'all',
                        minSize: 0,
                    },
                    'redux-thunk': {
                        test: /[\\/]node_modules[\\/]redux-thunk[\\/]/,
                        reuseExistingChunk: true,
                        enforce: true,
                        name: 'redux-thunk',
                        chunks: 'all',
                        minSize: 0,
                    },
                    'prop-types': {
                        test: /[\\/]node_modules[\\/]prop-types[\\/]/,
                        reuseExistingChunk: true,
                        enforce: true,
                        name: 'prop-types',
                        chunks: 'all',
                        minSize: 0,
                    },
                    'role': {
                        test: /[\\/]src[\\/]modules[\\/]role[\\/]/,
                        reuseExistingChunk: true,
                        enforce: true,
                        name: 'role',
                        chunks: 'all',
                        minSize: 0,
                    },
                    'login': {
                        test: /[\\/]src[\\/]modules[\\/]login[\\/]/,
                        reuseExistingChunk: true,
                        enforce: true,
                        name: 'login',
                        chunks: 'all',
                        minSize: 0,
                    },
                    'users': {
                        test: /[\\/]src[\\/]modules[\\/]users[\\/]/,
                        reuseExistingChunk: true,
                        enforce: true,
                        name: 'users',
                        chunks: 'all',
                        minSize: 0,
                    },
                    'edit': {
                        test: /[\\/]src[\\/]modules[\\/]edit[\\/]/,
                        reuseExistingChunk: true,
                        enforce: true,
                        name: 'edit',
                        chunks: 'all',
                        minSize: 0,
                    },
                    'app': {
                        test: /[\\/]src[\\/]modules[\\/]app[\\/]/,
                        reuseExistingChunk: true,
                        enforce: true,
                        name: 'app',
                        chunks: 'all',
                        minSize: 0,
                    },
                },
            },
        },
    };
};