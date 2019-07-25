const webpack = require('webpack');
const path = require('path');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'production',
  module: {
    rules: [
      {parser: {System: false}},
      {
        test: /\.jsx$/,
        loader: 'babel-loader'
      },
      {
        test: /\.js$/,
        exclude: [path.resolve(__dirname, 'node_modules')],
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    // new CleanWebpackPlugin()
  ],
  devtool: 'source-map',
  externals: [
    /^@portal\/*/,
    /^lodash$/,
    /^single-spa$/,
    /^rxjs\/?.*$/,
  ],
}
