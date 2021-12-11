const {merge} = require("webpack-merge")
const common = require("./webpack.common.js");
const Dotenv = require("dotenv-webpack");

module.exports = merge (common, {
  mode:"development",
  module:{
    rules:[
        {
            test: /\.css$/,
            exclude: /node_modules/,
            use: ["style-loader", "css-loader"],
        },
    ],
  },
  devtool: 'eval-source-map',
  devServer: {
      port: "8081",
      hot: true,
  },
  stats: "errors-only",
  plugins:[
    new Dotenv({
      path: "./dev.env",
    })
  ]
});