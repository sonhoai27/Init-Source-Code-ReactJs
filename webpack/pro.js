const merge = require('webpack-merge');
const { resolve } = require('path');

const commonConfig = require('./common');

module.exports = merge(commonConfig, {
    mode: 'production',
    entry: './index.tsx',
    output: {
        filename: 'js/[name].[hash].js',
        chunkFilename: "js/[name].[hash].js",
        path: resolve(__dirname, '../build/'),
        publicPath: '/'
    },
    stats: {
        colors: false,
        hash: true,
        timings: true,
        assets: true,
        chunks: true,
        chunkModules: true,
        modules: true,
        children: true,
    },
    devtool: '',
    plugins: [],
});