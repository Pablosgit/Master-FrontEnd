const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const webpack = require('webpack');
const handler = (percentage, message, ...args) => {
    console.info(percentage, message, ...args);
  };
  

module.exports = merge(common, {
    mode: "development",
    module:{
        rules: [
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
        ],
    },
    plugins:[
        new webpack.ProgressPlugin({
            activeModules: true,
            entries: true,
            handler(percentage, message, ...args) {
                console.info(percentage, message, ...args);
            },
            modules: true,
            modulesCount: 5000,
            profile: false,
            dependencies: true,
            dependenciesCount: 10000,
            percentBy: null,
          }),
    ],
    devtool: 'eval-source-map',
    devServer:{
        port: 8080,
        hot: true,
        devMiddleware: {
            stats: "errors-only",
        },
    }
});