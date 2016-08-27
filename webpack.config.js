'use strict';

import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
    devtool: 'source-map',
    devServer: {
        noInfo: true,
        inline: true
    },
    entry: [
        'webpack/hot/dev-server',
        './src/index.js'
    ],
    output: {
        path: __dirname + '/' + 'build',
        filename: 'bundle.js'
    },
    module: {
        preLoaders: [
            {test: /\.js$/, loader: 'eslint-loader'}
        ],
        loaders: [
            {test: /\.js$/, loader: 'babel-loader'},
            {test: /\.css$/, loader: 'style-loader!css-loader'}
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        /*
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                screw_ie8: true,
                warnings: false
            }
        }),
        */
        new HtmlWebpackPlugin({
            inject: 'body',
            title: 'react-es6-jest-enzyme',
            templateContent: '<div id="root"></div>'
        })
    ]
};
