const path = require('path');

const ps = path.sep;
const _node_modules = `${ps}node_modules${ps}`;
const _index        = `${ps}src${ps}modules${ps}index`;
const _app          = `${ps}src${ps}modules${ps}app`;
const _login        = `${ps}src${ps}modules${ps}login`;

module.exports = (params = {}) => {
    const {minimize = true} = params;

    return {
        optimization: {
            minimize,
            removeEmptyChunks: false,
            splitChunks: {
                cacheGroups: {
                    'login': {
                        test: function(module, chunks) {
                            let nodeModules, login = false;

                            if (module.context) {
                                nodeModules = module.context.includes(_node_modules);
                                login = module.context.includes(_login);
                            } else {
                                nodeModules = module.issuer.context.includes(_node_modules);
                                login = module.issuer.context.includes(_login);
                            }

                            const importsInApp = chunks.filter((c) => c.name === 'main').length;

                            return (nodeModules || login) && importsInApp;
                        },
                        reuseExistingChunk: true,
                        enforce: true,
                        name: 'login',
                        chunks: 'all',
                        minSize: 0,
                    },
                    'app': {
                        test: function(module, chunks) {
                            let nodeModules, app = false;

                            if (module.context) {
                                nodeModules = module.context.includes(_node_modules);
                                app = module.context.includes(_app);
                            } else {
                                nodeModules = module.issuer.context.includes(_node_modules);
                                app = module.issuer.context.includes(_app);
                            }

                            const importsInApp = chunks.filter((c) => c.name === 'main').length;

                            return (nodeModules || app) && importsInApp;
                        },
                        reuseExistingChunk: true,
                        enforce: true,
                        name: 'app',
                        chunks: 'all',
                        minSize: 0,
                    },
                    'index': {
                        test: function(module, chunks) {
                            let nodeModules, index = false;

                            if (module.context) {
                                nodeModules = module.context.includes(_node_modules);
                                index = module.context.includes(_index);
                            } else {
                                nodeModules = module.issuer.context.includes(_node_modules);
                                index = module.issuer.context.includes(_index);
                            }

                            const importsInApp = chunks.filter((c) => c.name === 'main').length;

                            return (nodeModules || index) && importsInApp;
                        },
                        reuseExistingChunk: true,
                        enforce: true,
                        name: 'index',
                        chunks: 'all',
                        minSize: 0,
                    },
                },
            },
        },
    };
};