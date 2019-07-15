'use strict';

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const addHash = require('./func').addHash;

module.exports = () => {
    return {
        optimization: {
            splitChunks: {
                cacheGroups: {
                    styles: {
                        name: 'app',
                        test: /\.css$/,
                        chunks: 'all',
                        enforce: true,
                    },
                },
            },
        },
        module: {
            rules: [
                {
                    test: /\.(jsx|js)(\?.*$|$)/,
                    exclude: [/node_modules/, /public/],
                    use: {
                        loader: "babel-loader",
                        options: {
                            //plugins: ['transform-runtime'],
                            presets: ["@babel/preset-env", "@babel/preset-react",
                                {
                                    plugins: [
                                        '@babel/plugin-proposal-class-properties'
                                    ]
                                }],
                        },
                    }
                },
                {
                    test: /\.(css|less)$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        'css-loader',
                        'less-loader'
                    ]
                },
                {
                    test: /\.(jpe|woff|woff2|eot|ttf|otf)(\?.*$|$)/,
                    use: 'url-loader'
                },
                {
                    test: /\.gif$/,
                    use: [{
                        loader: 'url-loader',
                        options: {
                            limit: 10000,
                            mimetype: 'image/gif'
                        }
                    }]
                },
                {
                    test: /\.jpg$/,
                    use: [{
                        loader: 'url-loader',
                        options: {
                            limit: 10000,
                            mimetype: 'image/jpg'
                        }
                    }]
                },
                {
                    test: /\.png$/,
                    use: [{
                        loader: 'url-loader',
                        options: {
                            limit: 10000,
                            mimetype: 'image/png'
                        }
                    }]
                },
                {
                    test: /\.svg/,
                    use: [{
                        loader: 'url-loader',
                        options: {
                            limit: 10000,
                            mimetype: 'image/svg+xml'
                        }
                    }]
                },
                {
                    test: /\.json$/,
                    type: "javascript/auto",
                    exclude: /(node_modules)/,
                    use: [
                        {
                            loader: 'json-loader',
                            options: {},
                        },
                    ],
                }
            ],
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: addHash('[name].css', 'chunkhash'),
            }),
        ],
    };
};

function wrapRegexp(regexp, label) {
    regexp.test = function(path) {
        return RegExp.prototype.test.call(this, path);
    };
    return regexp;
}