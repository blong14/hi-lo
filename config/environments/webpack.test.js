

'use strict';

const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');

let config = webpackMerge(commonConfig, {});

config.node = {
  fs: "empty"
}

module.exports = config;
