import CopyPlugin from 'copy-webpack-plugin';
import dotenv from 'dotenv';
import Dotenv from 'dotenv-webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';
import { Configuration } from 'webpack';
import 'webpack-dev-server';
import { isNullOrWhiteSpace } from './src/utils/strings';

const config = (env, argv): Configuration => {
  dotenv.config({
    path: `.env.${argv.mode}`,
  });

  const publicPath = isNullOrWhiteSpace({ str: process.env.BASE_PATH })
    ? '/'
    : process.env.BASE_PATH;

  return {
    entry: './src/index.ts',
    output: {
      filename: 'index.js',
      path: path.resolve(__dirname, 'dist'),
      clean: true,
      publicPath: publicPath === '/' ? publicPath : publicPath + '/',
    },
    devtool: 'inline-source-map',
    module: {
      rules: [
        { test: /\.ts$/, use: 'ts-loader', exclude: [/node_modules/, /tests/] },
        {
          test: /\.css$/i,
          use: ['css-loader'],
        },
      ],
    },
    resolve: {
      extensions: ['.ts', '.js'],
    },
    plugins: [
      new Dotenv({
        path: `.env.${argv.mode}`,
      }),
      new HtmlWebpackPlugin({
        title: 'Get It Done',
        filename: 'index.html',
        template: path.resolve(__dirname, 'src', 'assets', 'index.html'),
        publicPath: publicPath,
      }),
      new HtmlWebpackPlugin({
        title: 'Get It Done',
        filename: '404.html',
        template: path.resolve(__dirname, 'src', 'assets', '404.html'),
        publicPath: publicPath,
      }),
      new CopyPlugin({
        patterns: [
          path.resolve(__dirname, 'src', 'assets', 'index.css'),
          path.resolve(__dirname, 'src', 'assets', 'favicon.ico'),
        ],
      }),
    ],
    optimization: {
      minimize: false,
    },
    devServer: {
      static: {
        directory: path.join(__dirname, 'src', 'assets'),
      },
      historyApiFallback: true,
      port: 9000,
    },
  };
};

export default config;
