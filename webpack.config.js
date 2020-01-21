'use strict';

const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');

const addHash = require('./webpack/func').addHash;

const modules = require('./webpack/modules');
const clean = require('./webpack/clean');
const html = require('./webpack/html');
const optimize = require('./webpack/optimize');
const optimization = require('./webpack/optimization');

const global = {
  PATHS: {
    appRoot: __dirname,
    root: path.join(__dirname),
    public: path.resolve(__dirname, 'public'),
    output: path.resolve(__dirname, 'public/build/'),

    context: path.join(__dirname, 'src'),
    index: path.join(__dirname, 'src/routes.jsx'),
    modules: path.join(__dirname, 'src/modules/'),

    build: path.join('/build/'),
  },
};

module.exports = (env) => {
  const common = merge([
    {
      mode: env === 'production' ? 'production' : 'development',
      context: global.PATHS.context,
      entry: global.PATHS.index,
      output: {
        path: global.PATHS.output,
        publicPath: global.PATHS.build,
        filename: addHash('[name].js', 'chunkhash'),
        library: '[name]',
      },
      devtool: false,
      node: {
        fs: 'empty',
      },
      resolve: {
        modules: [
          global.PATHS.context,
          'node_modules',
        ],
        alias: {
          Modules: global.PATHS.modules,
        },
        extensions: ['.js', '.jsx', '.less', '.json'],
      },
      plugins: [
        new webpack.SourceMapDevToolPlugin({
          filename: '[file].map',
          exclude: ['/node_modules/'],
        }),
        new webpack.DefinePlugin({
          NODE_ENV: JSON.stringify(env),
        }),
        new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /ru|en-gb/),
        new webpack.NoEmitOnErrorsPlugin(),
      ],
    },
  ]);

  const prod = merge([
    {
      watch: false,
      cache: true,
    },
  ]);

  const dev = merge([
    {
      watch: true,
      cache: true,
      devServer: {
        contentBase: global.PATHS.public,
        host: '0.0.0.0',
        port: 3000,
        historyApiFallback: true,
        compress: true,
        https: false,
        disableHostCheck: true,
        headers: { 'X-Custom-Header': 'yes' },
        stats: { colors: true, inline: true },
        watchOptions: {
          aggregateTimeout: 300,
          poll: 1000,
        },
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
      clean(global.PATHS.public),
      html(env, global.PATHS.public),
    ]);
  }

  if (env === 'development') {
    return merge([
      common,
      dev,
      optimization({ minimize: false }),
      modules(),
    ]);
  }
};
