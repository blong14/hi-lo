'use strict';

switch (process.env.NODE_ENV) {
  case 'prod':
  case 'production':
    module.exports = require('./environments/webpack.prod');
    break;
  case 'test':
  case 'testing':
    module.exports = require('./environments/webpack.test');
    break;
  case 'dev':
  case 'development':
  default:
    module.exports = require('./environments/webpack.dev');
}
