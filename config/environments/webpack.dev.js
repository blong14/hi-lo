'use strict';

const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');

let devServerPort = 3808;

 let config = webpackMerge(commonConfig, {});

 config.devServer = {
    port: devServerPort,
    headers: { 'Access-Control-Allow-Origin': '*' }
  };
  config.output.publicPath = '//localhost:' + devServerPort + '/webpack/';
  // Source maps
  config.devtool = 'cheap-module-eval-source-map';

 module.exports = config;

