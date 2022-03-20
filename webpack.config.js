const webpack = require('webpack')
const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const _compact = require('lodash/fp/compact')

const isDev = process.env.NODE_ENV !== 'production'

module.exports = {
  cache: true,
  devtool: isDev ? 'inline-source-map' : false,
  context: path.join(__dirname, 'src'),

  entry: {
    index: [
      'react-hot-loader/patch',
      './index',
    ],
  },

  output: {
    filename: '[name].[hash].js',
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
  },

  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@app': path.resolve(__dirname, 'src'),
      '@locale': path.resolve(__dirname, 'src/locale/strings.js'),
    },
  },

  devServer: {
    hot: true,
    host: '0.0.0.0',
    historyApiFallback: true,
    proxy: {
      '/api': {
        target: 'https://coa1.herokuapp.com/',
        changeOrigin: true,
      },
    },
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        options: {
          cacheDirectory: true,
        },
        include: path.resolve(__dirname, 'src'),
      },
      {
        test: /\.(otf|ttf|eot|woff|woff2?)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
        },
      },
      {
        test: /\.svg/,
        loader: 'svg-url-loader',
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: require.resolve('css-loader'),
            options: {
              // importLoaders: 1,
              // modules: {
              //   localIdentName: '[name]__[local]___[hash:base64:5]',
              // },
              sourceMap: isDev,
            },
          },
        ],
      },
      {
        test: /\.(sa|sc)ss$/,
        use: [
          'style-loader',
          {
            loader: require.resolve('css-loader'),
            options: {
              importLoaders: 1,
              modules: {
                localIdentName: '[name]__[local]___[hash:base64:5]',
              },
              sourceMap: isDev,
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        use: [
          { loader: 'url-loader', options: { limit: 8192 } },
          { loader: 'image-webpack-loader', options: { bypassOnDebug: true } },
        ],
      },
      {
        test: /\.(pdf)$/,
        use: [
          { loader: 'file-loader', options: { name: '[name].[ext]' } },
        ],
      },
    ],
  },

  plugins: _compact([
    !isDev && new CleanWebpackPlugin({ dry: isDev }),
    new HtmlWebpackPlugin({
      hash: true,
      title: 'Tips',
      template: './index.html',
      production: !isDev,
      development: isDev,
    }),
    isDev && new webpack.DefinePlugin({
      Env: JSON.stringify({
        OAUTH2_CLIENT_ID: 'tips.local',
        OAUTH2_CLIENT_SECRET: 'qwerty',
      }),
    }),
    new webpack.DefinePlugin({
      DEVELOPMENT: JSON.stringify(isDev),
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
  ]),
}
