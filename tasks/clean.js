'use strict';
var shell = require('shelljs'),
    test = shell.test,
    rm = shell.rm;

var paths = require('./paths');

// removes /dist
if (test('-d', paths.build.ROOT)) {
    rm('-rf', paths.build.ROOT);
}

// removes /transpiled
if (test('-d', paths.transpiled.ROOT)) {
    rm('-rf', paths.transpiled.ROOT);
}
