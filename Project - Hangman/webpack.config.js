const path = require('path')

module.exports = {
    entry: ['babel-polyfill', './src/index.js'],
    output: {
        // Must be absolute path
        // We will use __dirname global variable for this, which takes care of the absolute path up to the root of the project
        // Path must use library like 'path' to connect __dirname with rest of path due to OS differences
        path: path.resolve(__dirname, 'public/scripts'),
        // Can rename to whatever you want. Main.js is what webpack now uses. Bundle.js is what it used to use.
        filename: 'bundle.js'
    },
    // load babel with all of our js files and excluding node_module folders
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['env']
                }
            }
        }]
    },
    // webpack-dev-server
    devServer: { // must be absolute path
        contentBase: path.resolve(__dirname, 'public'),
        // where webpack puts assets. In lieu of writing the bundle.js
        publicPath: '/scripts/'
    },
    // allows debugging lines to be accurate by providing the pre-babel'ed line #
    devtool: 'source-map'
}