node-timed-log
==============

A small revamp of console.log and console.error, adding time banners before messages

## Usage

```javascript
var log = import('node-timed-log');

log.message('My Message');
// will print this to stdout:
//   >>> [Sun Jul 26 2015 16:05:24 GMT+0000] My Message

log.error('Oops..');
// will print this to stderr:
//   >>> [Sun Jul 26 2015 16:05:29 GMT+0000] Oops

```
