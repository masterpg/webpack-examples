const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    index: './src/index.js',
    app1: './src/app1.js',
    app2: './src/app2.js',
    app3: './src/app3.js',
    app4: './src/app4.js',
  },
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
    path: path.resolve(__dirname, 'public')
  }
};
