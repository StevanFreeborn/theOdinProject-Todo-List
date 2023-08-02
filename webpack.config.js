const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = (env, argv) => {
  return {
    entry: './src/index.ts',
    output: {
      filename: 'index.js',
      path: path.resolve(__dirname, 'dist', 'js'),
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
    ],
    optimization: {
      minimize: false,
    },
  };
};
