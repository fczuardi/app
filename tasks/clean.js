'use strict';
var shell = require('shelljs'),
    rm = shell.rm;

var paths = require('./paths');

rm('-rf', paths.build.ROOT + '/*');
