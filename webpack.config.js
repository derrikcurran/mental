const path = require('path');

const config = {
  entry: [
    './src/index.html',
    './src/index.js',
  ],
  module: {
    rules: [{
      test: /\.html/,
      loader: 'file-loader?name=[name].[ext]',
    }, {
      test: /\.js$/,
      exclude: /node_modules/,
      use: [
        'babel-loader',
        'eslint-loader',
      ],
    }],
  },
  resolve: {
    extensions: ['.js'],
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: './build',
  },
};

module.exports = config;