const path = require("path");

module.exports = {
  mode: "development",
  entry: "./index.js", 
  output: {
    path: path.resolve(__dirname, "docs"),
    filename: "main.js",
    libraryTarget: "commonjs2",
  },
  target: 'node',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/i,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
            options: {
              url: false,
            },
          },
        ],
      },
    ],
  },
  devServer: {
    port: "9500",
    contentBase: ["./public"],
    historyApiFallback: true,
    open: true,
  },
  plugins: [],
  resolve: {
    extensions: [".js", ".jsx", ".json"],
    alias: {
      "@library": path.resolve(__dirname, "src/myPath"),
    },
  },
};
