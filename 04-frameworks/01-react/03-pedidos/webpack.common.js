const htmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
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
    devServer: {
        historyApiFallback: true,
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
                exclude: /node_modules/,
                loader: 'url-loader',
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
    ],
};