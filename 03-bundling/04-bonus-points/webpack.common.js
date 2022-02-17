const htmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const webpack = require('webpack');
const path = require("path");
const basePath = __dirname;

module.exports = {
    context: path.join(basePath, 'src'),
    resolve:{
        extensions: [".js",".ts",".tsx"]
    },
    entry: {
       app: "./index.tsx",
    },
    output:{
        path: path.resolve(process.cwd(), 'dist'),
    },
    module:{
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                type: 'asset/resource',
            },
            {
                test: /\.html$/,
                loader: 'html-loader',
            },
        ],
    },
    plugins: [
        new htmlWebpackPlugin({
            template: "./index.html",
            filename: "index.html",
            scriptLoading: "blocking",
        }),
        new CleanWebpackPlugin(),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        }),
    ],
};