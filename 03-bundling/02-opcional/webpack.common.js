const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

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
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "index.html",
            scriptLoading: "blocking",
        }),
        new CleanWebpackPlugin(),
      ],
};