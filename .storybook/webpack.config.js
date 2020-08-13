"use strict";

module.exports = {
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: "ts-loader",
      },
      {
        exclude: [/node_modules/, /\.(jsx?|m?js|html?|json|tsx?|css)$/],
        loader: "file-loader",
        options: {
          name: "assets/[name].[hash:8].[ext]",
        },
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
  },
};
