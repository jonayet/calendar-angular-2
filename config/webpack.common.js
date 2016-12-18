var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var pathResolver = require('./path-resolver');

module.exports = {
    entry: {
        polyfills: './src/polyfills.ts',
        vendor: './src/vendor.ts',
        main: './src/index.ts'
    },

    resolve: {
        extensions: ['', '.ts', '.js']
    },

    module: {
        loaders: [
            {
                test: /\.ts$/,
                exclude: [/\.(spec|e2e)\.ts$/],
                loaders: ['awesome-typescript-loader', 'angular2-template-loader']
            },
            {
                test: /\.html$/,
                include: pathResolver.fullPath('src', 'app'),
                loader: 'html-loader'
            },
            {
                test: /\.css$/,
                include: pathResolver.fullPath('src', 'app'),
                loader: 'raw-loader'
            },
            // {
            //     test: /\.scss$/,
            //     include: pathResolver.fullPath('src', 'app'),
            //     loaders: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
            // },
            // {
            //     test: /\.css$/,
            //     include: pathResolver.fullPath('src', 'app'),
            //     loaders: ['style-loader', 'css-loader']
            // },
            {
                test: /\.css$/,
                exclude: pathResolver.fullPath('src', 'app'),
                loader: ExtractTextPlugin.extract('style', 'css?sourceMap')
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                loader: 'url-loader?limit=10000&name=[path]/[name].[hash].[ext]'
            }
        ]
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: ['main', 'vendor', 'polyfills']
        }),

        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: '../index.html'
        })
    ]
};