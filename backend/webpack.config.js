const webpack = require('webpack');
const path = require('path');
const Dotenv = require('dotenv-webpack');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    name: 'server',
    target: 'node',
    entry: './server-dev.js', // Adjusted for your root-level entry file
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'server.bundle.js'
    },
    cache: false,
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
        ],
    },
    resolve: {
        modules: [path.resolve(__dirname), 'node_modules'], // Adjusted to point to the root directory
        extensions: ['.js', '.json'], // Add other extensions as needed
    },
    externals: [nodeExternals()], // Ignore all modules in node_modules except Webpack hot reloading
    plugins: [
        new Dotenv({
            path: '.env.development', // Adjust as needed
        }),
        new webpack.HotModuleReplacementPlugin(), // Enable Hot Module Replacement for development
    ],
    devtool: 'inline-source-map', // Add source maps for easier debugging in development
    mode: 'development', // Set the mode to 'development' or 'production' based on your environment
};
