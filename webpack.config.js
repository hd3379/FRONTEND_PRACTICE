const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/ts/index.ts",
  devtool: "inline-source-map",
  devServer: {
    static: "./dist",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i, 
        loader: "file-loader?name=/img/[name].[ext]"
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  watch: true,
  watchOptions: {
    aggregateTimeout: 200,
    poll: 1000,
    ignored: /node_modules/,
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
};
