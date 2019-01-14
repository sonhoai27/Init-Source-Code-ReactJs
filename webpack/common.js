const { resolve } = require('path');
const path = require('path');
const webpack = require('webpack');
const { CheckerPlugin } = require('awesome-typescript-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin')

const babelLoader = {
    loader: 'babel-loader',
    options: {
        cacheDirectory: true,
        presets: [
            ['@babel/preset-env']
        ],
        comments: true,
        compact: false,
        plugins: ['@babel/plugin-syntax-dynamic-import']
    },
};

module.exports = {
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        alias: {
            '@app': path.resolve('./src/'),
        }
    },
    context: resolve(__dirname, '../src/'),
    module: {
        rules: [{
                test: /\.js$/,
                use: ['babel-loader', 'source-map-loader'],
                exclude: /node_modules(?!\/quill-image-drop-module|quill-image-resize-module)/,
            },
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: [babelLoader, 'awesome-typescript-loader'],
            },
            {
                test: /\.scss$/,
                use: [{
                        loader: "style-loader"
                    },
                    {
                        loader: require.resolve('css-loader'),
                        options: {
                            importLoaders: 1,
                            modules: true,
                            localIdentName: "sh__[hash:base64:25]",
                        }
                    },
                    { loader: 'postcss-loader' },
                    {
                        loader: "sass-loader"
                    }
                ]
            },
            {
                test: /\.css$/,
                exclude: [
                    '/src/index.module.css',
                    /node_modules(?!\/react-lazy-load-image-component)/
                ],
                use: [
                    { loader: 'style-loader' },
                    {
                        loader: require.resolve('css-loader'),
                    },
                    { loader: 'postcss-loader' }
                ],
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: [
                    'file-loader?hash=sha512&digest=hex&name=img/[hash].[ext]',
                ],
            }
        ]
    },
    plugins: [
        new CheckerPlugin(),
        new webpack.ProvidePlugin({
            'window.Quill': 'quill'
        }),
        new HtmlWebpackPlugin({
            template: '../public/index.html',
            minify: {
                collapseWhitespace: true
            },
            chunksSortMode: 'auto'
        }),
        new CopyWebpackPlugin([
            { from: '../public/manifest.json', to: '../build' },
            { from: '../public/images/', to: '../build/images' },
            { from: '../public/css/', to: '../build/css' },
            { from: '../public/images/favicon.ico', to: '../build' }
        ])
    ],
    optimization: {
        splitChunks: {
            cacheGroups: {
                default: false,
                vendors: false,
                vendor: {
                    chunks: 'all',
                    test: /node_modules/
                }
            }
        }
    }
}