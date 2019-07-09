const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = (env, root) => {
    return {
        plugins: [
            new HtmlWebPackPlugin({
                filename: root + '/index.html',
                template: env === 'production' ? 'template_pro.html' : 'template_dev.html'
            })
        ],
    };
};