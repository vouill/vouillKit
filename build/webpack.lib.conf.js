var webpack = require('webpack');
var path = require('path');
var libraryName = 'vouill-vue-ui';
var outputFile = libraryName + '.js';
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base.conf')

var config = merge(baseWebpackConfig,{
  entry: path.resolve(__dirname, '../src/vouill.js'),
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, '../lib'),
    filename: outputFile,
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true
  }
});

module.exports = config;
