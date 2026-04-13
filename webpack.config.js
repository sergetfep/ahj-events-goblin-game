const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';

  return {
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'main.[contenthash].js',
      assetModuleFilename: 'assets/[name][ext][query]',
      clean: true,
      publicPath: 'auto',
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: 'babel-loader',
        },
        {
          test: /\.css$/i,
          use: [isProduction ? MiniCssExtractPlugin.loader : 'style-loader', 'css-loader'],
        },
        {
          test: /\.(png|jpe?g|gif|svg)$/i,
          type: 'asset/resource',
        },
      ],
    },
    resolve: {
      extensions: ['.js'],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html',
      }),
      ...(isProduction ? [
        new MiniCssExtractPlugin({
          filename: 'styles.[contenthash].css',
        }),
      ] : []),
    ],
    devServer: {
      static: path.resolve(__dirname, 'dist'),
      port: 8080,
      hot: true,
      open: true,
    },
    devtool: isProduction ? 'source-map' : 'inline-source-map',
  };
};
