const htmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const path = require("path");


module.exports = {
    resolve: {
        extensions: [".js",".ts"],
    },
    entry: ["./src/index.ts"],
    output: {
        path: path.resolve(__dirname, "dist"),
      },
    module:{
        rules:[
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                loader: "babel-loader",
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
            },
            {
                test: /\.(png|jpg)$/,
                type: "asset/resource",
            },
            {
                test: /\.html$/,
                exclude: /node_modules/,
                loader: "html-loader",  
            },
        ]        
    },
    plugins:[
        new htmlWebpackPlugin(
            {
                template: "./src/index.html",
                filename: "index.html",
                scriptLoading: "blocking",
            }
        ),
        new MiniCssExtractPlugin(),
        new CleanWebpackPlugin(),
    ],
};