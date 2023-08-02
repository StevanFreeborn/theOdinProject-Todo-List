import CopyPlugin from 'copy-webpack-plugin';
import Dotenv from 'dotenv-webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';
import { Configuration } from 'webpack';
import 'webpack-dev-server';

const config = (env, argv): Configuration => {
  const publicPath =
    argv.mode === 'development' ? '' : '/theOdinProject-Todo-List';

  return {
    entry: './src/index.ts',
    output: {
      filename: 'index.js',
      path: path.resolve(__dirname, 'dist'),
      clean: true,
    },
    devtool: 'inline-source-map',
    module: {
      rules: [
        { test: /\.ts$/, use: 'ts-loader', exclude: [/node_modules/, /tests/] },
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
        patterns: [path.resolve(__dirname, 'src', 'assets', 'index.css')],
      }),
    ],
    optimization: {
      minimize: false,
    },
    devServer: {
      static: {
        directory: path.join(__dirname, 'dist'),
      },
      historyApiFallback: true,
      port: 9000,
    },
  };
};

export default config;
