const path = require("path");

module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.tsx?$/,
    exclude: /node_modules/,
    use: "ts-loader",
  });

  config.module.rules.push({
    test: /\.yml$/,
    use: [{ loader: "json-loader" }, { loader: "yaml-flat-loader" }],
  });

  config.resolve.extensions.push(".ts", ".tsx", ".js", ".jsx", ".json");

  config.resolve.alias = {
    ...config.resolve.alias,
    "@soroha": path.resolve(__dirname, "..", "src"),
  };

  return config;
};
