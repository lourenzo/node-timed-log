/**
 * Timed Logging
 * Initially, just adds a formatted DateTime banner to
 * console.log (stdout) and console.error (stderr)
 *
 * @todo Make it more configurable
 */
'use strict';

// Requirements
var util = require('util')
  , moment = require('moment');

/**
 * Return a timestamp banner to be used with
 * @return {[type]} [description]
 */
function addTimeBanner(args) {
  var msg = [
    util.format('>>> [%s]', moment().utc()),
    util.format.apply(null, args)
  ];
  return msg;
}

/**
 * Log a non-error message
 */
exports.message = function () {
  console.log.apply(null, addTimeBanner(arguments));
};

/**
 * Log a error message
 */
exports.error = function () {
  console.error.apply(null, addTimeBanner(arguments));
};
