const path    = require('path');
const webpack = require('webpack');
const merge   = require('webpack-merge');

const addHash = require('./webpack/func').addHash;

const modules      = require('./webpack/modules');
const clean        = require('./webpack/clean');
const html         = require('./webpack/html');
const optimize     = require('./webpack/optimize');
const optimization = require('./webpack/optimization');

global.$ = {
    PATHS: {
        appRoot: __dirname,
        root: path.join(__dirname),
        source: path.join(__dirname, 'source'),
        build: path.join(__dirname, 'build'),
    },
};

module.exports = (env) => {
    const outputPath       = __dirname + '/public/build/';
    const outputPublicPath = '/build/';
    const cleanRoot        = __dirname + '/public/';

    const common = merge([
        {
            mode: env === 'production' ? 'production' : 'development',
            context: __dirname + '/src',
            entry: path.resolve(__dirname, 'src/routes.jsx'),
            devtool: env === 'development' ? "inline-source-map" : false,
            resolve: {
                modules: [
                    path.resolve(__dirname, './src'),
                    'node_modules',
                ],
                alias: {
                    Utilities: path.resolve(__dirname, './src/modules/'),
                    Templates: path.resolve(__dirname, './src/store/')
                },
                extensions: ['.js','.jsx','.less','.json'],
            },
            plugins: [
                new webpack.DefinePlugin({
                    NODE_ENV : JSON.stringify(env)
                }),
                new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /ru|en-gb/),
                new webpack.ProvidePlugin({
                    '$': 'jquery',
                    'jQuery': 'jquery',
                    'window.jQuery': 'jquery'
                }),
                new webpack.NoEmitOnErrorsPlugin(),
            ],
        },
    ]);

    const prod = merge([
        {
            context: __dirname + '/src',
            entry: path.resolve(__dirname, 'src/routes.jsx'),
            output: {
                path: outputPath,
                publicPath: outputPublicPath,
                filename: addHash('[name].js', 'chunkhash'),
                //chunkFilename: addHash('[id].js', 'chunkhash'),
                library: "[name]"
            },
            watch: false,
            cache: true,
        },
    ]);

    const dev = merge([
        {
            context: __dirname + '/src',
            entry: path.resolve(__dirname, 'src/routes.jsx'),
            output: {
                path: outputPath,
                publicPath: outputPublicPath,
                filename: addHash('[name].js', 'chunkhash'),
                //chunkFilename: addHash('[id].js', 'chunkhash'),
                library: "[name]"
            },
            watch: true,
            cache: true,
            devServer: {
                contentBase: path.resolve(__dirname, 'public'),
                host: '0.0.0.0',
                port: 3000,
                historyApiFallback: true,
                compress: true,
                disableHostCheck: true,
                headers: { "X-Custom-Header": "yes" },
                stats: { colors: true, inline: true },
                watchOptions: {
                    aggregateTimeout: 300,
                    poll: 1000,
                }
            },
        },
    ]);

    if (env === 'production') {
        return merge([
            common,
            prod,
            optimization(),
            modules(),
            optimize(),
            clean(cleanRoot),
            html(env, __dirname)
        ]);
    }

    if (env === 'development') {
        return merge([
            common,
            dev,
            optimization({minimize: false}),
            modules(),
        ]);
    }
};