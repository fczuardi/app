'use strict';
var shell = require('shelljs'),
    test = shell.test,
    rm = shell.rm;

var paths = require('./paths');

if (test('-d', paths.build.ROOT)) {
    rm('-rf', paths.build.ROOT);
}
