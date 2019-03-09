const path = require('path');
const webpack = require('webpack');

const HTMLPlugin = require("html-webpack-plugin");

module.exports = {
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development', 
  devtool: "source-map",
  entry: {
    index: [
      "webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000",
      path.resolve(__dirname, "./src/index.tsx")
    ]
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "bundle.js",
    publicPath: "/",
    hotUpdateMainFilename: ".hot/[hash].hot-update.json",
    hotUpdateChunkFilename: ".hot/[id].[hash].hot-update.js"
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "awesome-typescript-loader",
        options: {
          configFileName: path.resolve(__dirname, './tsconfig.json')
        }
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HTMLPlugin({
      template: path.resolve(__dirname, "./src/index.html")
    })
  ]
};
