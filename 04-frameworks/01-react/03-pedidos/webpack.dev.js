const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
  

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
    devtool: 'eval-source-map',
    devServer:{
        port: 8080,
        hot: true,
        devMiddleware: {
            stats: "errors-only",
        },
    }
});