const merge = require('webpack-merge');
const webpack = require('webpack');
const { resolve } = require('path');

const commonConfig = require('./common');

module.exports = merge(commonConfig, {
    mode: 'development',
    entry: [
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://localhost:3001',
        'webpack/hot/only-dev-server',
        './index.tsx',
    ],
    output: {
        filename: 'js/[name].[hash].js',
        chunkFilename: "js/[name].[hash].js",
        path: resolve(__dirname, '../build'),
        publicPath: '/'
    },
    devServer: {
        hot: true,
        historyApiFallback: true,
        contentBase: './build',
        port: 3001,
        proxy: [{
            context: [
                '/api',
            ],
            target: 'http://localhost',
            secure: false,
            changeOrigin: true,
            headers: { host: 'localhost:3001' }
        }],
        watchOptions: {
            ignored: /node_modules/
        },
        open: true
    },
    module: {
        rules: [{
            test: /\.tsx?$/,
            exclude: /node_modules/,
            use: ['awesome-typescript-loader'],
        }, ]
    },
    devtool: 'cheap-module-eval-source-map',
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
    ],
});