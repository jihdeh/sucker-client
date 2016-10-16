// webpack.config.js
const webpack = require("webpack");
const path = require("path");
const fs = require("fs");

let devtool, loaders;
if (process.env.NODE_ENV === "development") {
  loaders = ["react-hot-loader/webpack", "babel-loader", "babel"]
  devtool = "cheap-module-eval-source-map";
} else {
  devtool = "cheap-module-source-map"
}

module.exports = {
  devtool: devtool,
  entry: {
    app: ["babel-polyfill", "./app/client.js"]
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    preLoaders: [
      { test: /\.json$/, loader: "json" },
    ],
    loaders: [{
      test: /\.js$/,
      loaders: loaders,
      exclude: /node_modules/
    }]
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      "process.env": {
        "NODE_ENV": JSON.stringify("production")
      }
    })
  ]
};
