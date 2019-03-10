const path = require("path");
const webpack = require("webpack");
const HTMLPlugin = require("html-webpack-plugin");
const CleanPlugin = require("clean-webpack-plugin");

module.exports = {
  mode: process.env.NODE_ENV === "production" ? "production" : "development",
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
        test: /\.(ts|tsx)?$/,
        loader: "babel-loader",
        options: {
          configFile: "../../babel.config.js"
        }
      },
      {
        test: /\.js$/,
        use: ["source-map-loader"],
        enforce: "pre"
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  },
  plugins: [
    new CleanPlugin(),
    new HTMLPlugin({
      template: path.resolve(__dirname, "./src/index.html")
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
};
