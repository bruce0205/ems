'use strict'

const winston = require('winston');
const fs = require('fs');
const moment = require('moment');
const env = process.env.NODE_ENV || 'dev';
const logDir = 'logs';

if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir);
}

const tsFormat = () => moment().format('YYYY/MM/DD HH:mm:ss.SSS');;
const formatter = (options) => {
  if (options.level.length < 5) {
    return '[' + options.level.toUpperCase() + ' ] ' + options.timestamp() + ' - ' + (options.message ? options.message : '');
  } else {
    return '[' + options.level.toUpperCase() + '] ' + options.timestamp() + ' - ' + (options.message ? options.message : '');
  }
}

const logger = new (winston.Logger)({
  transports: [
    new (winston.transports.Console)({
      colorize: true,
      timestamp: tsFormat,
      formatter: formatter
    }),
    new (winston.transports.File)({
      filename: `${logDir}/app.log`,
      timestamp: tsFormat,
      maxsize: 10485760, //10MB
      maxFiles: 5,
      json: false,
      formatter: formatter
    })
  ]
});

if (env == 'prod') logger.level = 'info';
if (env == 'dev') logger.level = 'debug';

module.exports = logger;
