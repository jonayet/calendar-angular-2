var pathResolver = require('./path-resolver');

module.exports = {
    devtool: 'inline-source-map',

    resolve: {
        extensions: ['', '.ts', '.js']
    },

    module: {
        loaders: [
            {
                test: /\.ts$/,
                loaders: ['awesome-typescript-loader', 'angular2-template-loader']
            },
            {
                test: /\.(html|css)$/,
                include: pathResolver.fullPath('src', 'app'),
                loader: 'raw-loader'
            },
            {
                test: /\.css$/,
                exclude: pathResolver.fullPath('src', 'app'),
                loader: 'null-loader'
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                loader: 'null-loader'
            }
        ]
    }
}