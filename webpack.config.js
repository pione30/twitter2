const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpack = require("webpack");
const devConfig = require("./dev.config");

module.exports = {
  entry: path.join(__dirname, "src/index.tsx"),

  output: {
    filename: "bundle.[contenthash].js",
    path: path.join(__dirname, "dist"),
  },

  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader",
            options: {
              transpileOnly: true,
            },
          },
        ],
      },
    ],
  },

  resolve: {
    extensions: [".ts", ".tsx", ".wasm", ".mjs", ".js", ".json"],
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },

  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src/index.html"),
    }),
    new webpack.DefinePlugin({
      "process.env.AUTH0_DOMAIN": JSON.stringify(
        process.env.AUTH0_DOMAIN || devConfig.AUTH0_DOMAIN
      ),
      "process.env.AUTH0_CLIENT_ID": JSON.stringify(
        process.env.AUTH0_CLIENT_ID || devConfig.AUTH0_CLIENT_ID
      ),
    }),
  ],
};
