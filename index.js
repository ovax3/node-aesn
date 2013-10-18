var aes1 = function (a, fns, cb) {
  var c = -1;
  var n = fns.length;
  var next = function (err) {
    if (++c == n || err) return cb(err);
    fns[c](a, next);
  };
  next();
};

var aes2 = function (a, b, fns, cb) {
  var c = -1;
  var n = fns.length;
  var next = function (err) {
    if (++c == n || err) return cb(err);
    fns[c](a, b, next);
  };
  next();
};

module.exports = {
  one: aes1,
  two: aes2
};

