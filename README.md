applyEachSeries-N
=================

`easn` provides fast `applyEachSeries`-like functions for some given number of
arguments (currently one or two). It is used where the more generic
`applyEachSeries` from the great `async` library is too slow for critical
applications (the test runs in 4.5s against 23s on my laptop).

Install
-------

    npm install easn

Usage
-----

    var aes = require('aesn');

    var f = function (a, next) {
      console.log(a);
      return next();
    };

    var g = function (a, b, next) {
      console.log(a, b);
      return next();
    };

    var fs = [ f, f, f ];
    var gs = [ g, g, g ];

    aes.one(1, fs, function () {
      aes.two(1, 2, gs, function () {
        console.log('done');
      }
    });

will output

    1
    1
    1
    1 2
    1 2
    1 2
    done

