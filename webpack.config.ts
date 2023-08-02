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
        template: 'src/assets/index.html',
        publicPath: publicPath,
      }),
      new HtmlWebpackPlugin({
        title: 'Get It Done',
        filename: '404.html',
        template: 'src/assets/404.html',
        publicPath: publicPath,
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
