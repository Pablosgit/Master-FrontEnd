const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const path = require("path");

module.exports ={
    resolve: {
        extensions: [".js",".tsx"],
    },
    entry: ["./src/index.jsx"],
    output: {
        path: path.resolve(__dirname, "dist"),
      },
    module:{
        rules:[
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: "babel-loader",
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "index.html",
            scriptLoading: "blocking",
        }),
        new MiniCssExtractPlugin(),
        new CleanWebpackPlugin(),
      ],
    devtool: 'eval-source-map',
    devServer: {
        port: "8081",
        hot: true,
      },
    stats: "errors-only",
};