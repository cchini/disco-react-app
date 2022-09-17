const { merge } = require('webpack-merge');
const path = require('path');
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  output: {
    filename: 'js/[name].js',
    path: path.resolve(__dirname, '../public'),
    publicPath: '/',
  },
  devtool: 'eval',
  devServer: {
    historyApiFallback: true,
    static: {
      directory: path.join(__dirname, '../public'),
    },
    port: 3000,
    open: true,
  },
  plugins: [new NodePolyfillPlugin()],
});
