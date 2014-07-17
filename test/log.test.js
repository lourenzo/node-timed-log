'use strict';

var log = require('..');
// @todo: capture stdout and stderr fo checking

describe('Logger is ok', function () {
  it('Sends out messages', function () {
    var dummyObj = {foo: 'bar', x: 'y'};
    log.message('Simple Message');
    log.message('Formatted %s', 'message');
    log.message('Object: ', dummyObj);
  });
  it('Sends out errors', function () {
    var dummyObj = {foo: 'bar', x: 'y'};
    log.error('Simple Message');
    log.error('Formatted %s', 'message');
    log.error('Object: ', dummyObj);
  });
});
