const htmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
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
        filename: '[name].[chunkhash].js',
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
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
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
        new MiniCssExtractPlugin({
            filename: "[name].[chunkhash].css",
            chunkFilename: "[id].css"
        }),
        new CleanWebpackPlugin(),
    ],
    devtool: 'eval-source-map',
    devServer:{
        port: 8080,
        devMiddleware: {
            stats: "errors-only",
        },
    }
};