'use strict';
var shell = require('shelljs'),
    mkdir = shell.mkdir,
    cp = shell.cp;

var paths = require('./paths');

// Copy files to release dir
mkdir('-p', paths.build.IMG);
cp('-Rf', paths.src.IMG +'/*', paths.build.IMG);
