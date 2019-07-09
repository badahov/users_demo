'use strict';

const path    = require('path');
const webpack = require('webpack');
const merge   = require('webpack-merge');

const addHash = require('./webpack/func').addHash;

const modules      = require('./webpack/modules');
const clean        = require('./webpack/clean');
const html         = require('./webpack/html');
const optimize     = require('./webpack/optimize');
const optimization = require('./webpack/optimization');

module.exports = (env) => {
    const projectName    = 'operators';

    let publicRoot = path.join(__dirname, "public");
    let outputPath = path.join(__dirname, "public/build");
    let outputPublicPath = path.join(__dirname, "build");

    if (env === 'production') {
        publicRoot       = path.resolve('../../' + projectName + '/');
        outputPath       = path.resolve('../../' + projectName + '/build/');
        outputPublicPath = path.join('/' + projectName + '/build/');
    } else if (env === 'build') {
        env = 'production';
    }

    const common = merge([
        {
            mode: env === 'production' ? 'production' : 'development',
            context: __dirname + '/src',
            entry: path.resolve(__dirname, 'src/routes.jsx'),
            output: {
                path: outputPath,
                publicPath: outputPublicPath,
                filename: addHash('[name].js', 'chunkhash'),
                //chunkFilename: addHash('[id].js', 'chunkhash'),
                library: "[name]"
            },
            devtool: env === 'development' ? "inline-source-map" : false, //'source-map',
            node: {
                fs: "empty"
            },
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
            watch: false,
            cache: true,
        },
    ]);

    const dev = merge([
        {
            context: __dirname + '/src',
            entry: path.resolve(__dirname, 'src/routes.jsx'),

            watch: true,
            cache: true,
            devServer: {
                contentBase: path.resolve(__dirname, 'public'),
                host: '0.0.0.0',
                port: 3000,
                historyApiFallback: true,
                compress: true,
                https: false,
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
            clean(publicRoot),
            html(env, publicRoot)
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
