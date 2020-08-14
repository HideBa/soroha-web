"use strict";

const path = require("path");
const os = require("os");

const CleanPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ForkTsCheckerPlugin = require("fork-ts-checker-webpack-plugin");
const HardSourcePlugin = require("hard-source-webpack-plugin");
const webpack = require("webpack");

const devServerPort = 3000;

module.exports = (env, args = {}) => {
  const prod = args.mode === "production";

  return {
    devServer: {
      clientLogLevel: "none",
      contentBase: path.join(__dirname, "build"),
      // disableHostCheck: true,
      historyApiFallback: true,
      hot: true,
      open: true,
      port: devServerPort,
      stats: prod ? "normal" : "minimal",
    },
    devtool: prod ? undefined : "eval-source-map",
    entry: ["./src"],
    mode: prod ? "production" : "development",
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: [
            {
              loader: "thread-loader",
              options: {
                workers: Math.max(os.cpus().length - 1, 1),
              },
            },
            {
              loader: "babel-loader",
              options: {
                babelrc: false,
                cacheDirectory: true,
                plugins: ["react-hot-loader/babel"],
              },
            },
            {
              loader: "ts-loader",
              options: prod
                ? {}
                : {
                    compilerOptions: {
                      target: "es6",
                    },
                    happyPackMode: true,
                  },
            },
          ],
        },
        {
          exclude: [/node_modules/, /\.(jsx?|m?js|html?|json|tsx?)$/],
          loader: "file-loader",
          options: {
            name: "assets/[name].[hash:8].[ext]",
          },
        },
      ],
    },
    node: {
      dgram: "empty",
      fs: "empty",
      net: "empty",
      tls: "empty",
      child_process: "empty",
    },
    optimization: {},
    output: {
      filename: prod ? "[name].[chunkhash].js" : "[name].js",
      path: path.join(__dirname, "build"),
      publicPath: "/",
    },
    performance: {
      hints: prod ? "warning" : false,
    },
    plugins: [
      ...(prod
        ? [new CleanPlugin("build")]
        : [
            new webpack.HotModuleReplacementPlugin(),
            new HardSourcePlugin({
              environmentHash: {
                files: ["package-lock.json", "yarn.lock", "tsconfig.json"],
              },
            }),
            new ForkTsCheckerPlugin({
              checkSyntacticErrors: true,
            }),
          ]),
      new HtmlWebpackPlugin({
        template: "src/index.html",
      }),
    ],
    resolve: {
      modules: [path.resolve("./node_modules"), path.resolve("./src")],
      alias: {
        "@soroha": path.resolve(__dirname, "src/"),
        "react-dom": "@hot-loader/react-dom",
      },
      extensions: [".ts", ".tsx", ".js", ".jsx", ".json", ".mjs"],
    },
  };
};
