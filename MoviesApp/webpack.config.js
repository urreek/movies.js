var path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        'index': './wwwroot/src/js/index.js',
        'details': './wwwroot/src/js/details.js'
    },
    output: {
        path: path.resolve('./wwwroot/', 'build'),
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    },
    stats: {
        colors: true
    },
    devtool: 'source-map'
};