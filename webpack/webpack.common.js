const webpack = require('webpack');
const path = require('path');
const dotenv = require('dotenv');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

// .ENV variables
const env = dotenv.config().parsed || {};
const envKeys = Object.keys(env).reduce((prev, next) => {
  prev[`process.env.${next}`] = JSON.stringify(env[next]);
  return prev;
}, {});

module.exports = {
  entry: {
    app: './src/index.tsx',
  },
  target: 'web',
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, '../src/components/'),
      '@utilities': path.resolve(__dirname, '../src/utilities'),
      '@models': path.resolve(__dirname, '../src/models'),
      '@hooks': path.resolve(__dirname, '../src/hooks'),
      '@services': path.resolve(__dirname, '../src/services'),
      '@redux': path.resolve(__dirname, '../src/redux'),
      '@adapters': path.resolve(__dirname, '../src/adapters'),
      '@routes': path.resolve(__dirname, '../src/routes'),
      '@mocks': path.resolve(__dirname, '../src/mocks'),
    },
    extensions: ['.tsx', '.ts', '.scss', '.mjs', '.js', '.json', 'css'],
  },
  optimization: {
    minimizer: [new CssMinimizerPlugin()],
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
              '@babel/preset-typescript',
            ],
          },
        },
      },
      {
        test: /\.(scss|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {},
          },
          {
            loader: 'sass-loader',
            options: {},
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              esModule: false,
              publicPath: '../images',
              outputPath: '/images',
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              esModule: false,
              publicPath: '../fonts',
              outputPath: '/fonts',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin(envKeys),
    new MiniCssExtractPlugin({
      filename: 'css/app.css',
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html',
    }),
  ],
};
