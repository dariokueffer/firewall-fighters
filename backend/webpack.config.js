const webpack = require('webpack');
const path = require('path');
const Dotenv = require('dotenv-webpack');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    name: 'server',
    target: 'node',
    entry: './server-dev.js',
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
        modules: [path.resolve(__dirname), 'node_modules'],
        extensions: ['.js', '.json'],
    },
    externals: [nodeExternals()],
    plugins: [
        new Dotenv({
            path: process.env.DOTENV_CONFIG_PATH || '.env.dev',  // Use the env var from your npm script
            systemvars: true,  // Load system environment variables as well
            safe: true,  // Load '.env.example' to verify the '.env' variables are all set
            allowEmptyValues: true,  // Allow empty string in environment variables
            defaults: false  // Don't load '.env.defaults'
        }),
        new webpack.HotModuleReplacementPlugin(),
    ],
    devtool: 'inline-source-map',
    mode: 'development',
    // Add watchOptions for better development experience
    watchOptions: {
        ignored: /node_modules/,
        aggregateTimeout: 300,
        poll: 1000,
    }
};