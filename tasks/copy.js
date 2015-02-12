'use strict';
var path = require('path');

var argv = require('minimist')(process.argv.slice(2)),
    shell = require('shelljs'),
    mkdir = shell.mkdir,
    cp = shell.cp;

var paths = require('./paths');

// command line parameters
// --src=html or --src=img
var src = (argv.src === 'img') ? paths.src.IMG :
            (argv.src === 'html') ? paths.src.HTML : null,
    dest = (argv.src === 'img') ? paths.build.IMG :
            (argv.src === 'html') ? paths.build.WWW : null;

if (src && dest){
    // Copy files to release dir
    mkdir('-p', dest);
    cp('-Rf', src +'/*', dest);
} else if(argv.src === 'docs') {
    //copy README.md to docs/index.md
    mkdir('-p', paths.docs.ROOT);
    cp('-f', './README.md', path.join(paths.docs.ROOT, 'index.md'));
}
