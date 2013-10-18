var aes = require('./index');

var fn = function (a, next) {
  return next();
};

var fns = [ fn, fn, fn, fn, fn, fn, fn ];

var noop = function () {};

for (var i = 0; i < 9000000; i++) {
  aes.one(1, fns, noop);
};

