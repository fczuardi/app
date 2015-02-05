'use strict';
var fs = require('fs'),
    path = require('path');

var browserify = require('browserify'),
    reactify = require('reactify'),
    argv = require('minimist')(process.argv.slice(2)),
    shell = require('shelljs'),
    test = shell.test,
    mkdir = shell.mkdir;

var pkg = require('../package.json'),
    paths = require('./paths'),
    bundler,
    filename,
    fileStream,
    outputStream;

if (!test('-d', paths.build.JS)) {
    mkdir('-p', paths.build.JS);
}

//bundles the front-end app scripts
//defaults to bundling without 3rd-party libraries
//if the argument completeBundle is passed with value true
//then the external dependencies are included in the same bundle
function appBundle(completeBundle){
    let bundler = browserify({
            entries: [pkg.browser]
        })
        .transform(reactify, {
            es6: true
        });
    if (completeBundle !== true){
        bundler.external(pkg.browserLibs);
    }
    return bundler;
}

//bundles the 3rd party libraries as specified in browserLibs
//attribute of package.json
function vendorsBundle(){
    return browserify()
            .require(pkg.browserLibs);
}

// accepts a --type=vendors and --type=all command line parameters
filename = (argv.type !== undefined) ?
                    (argv.type + '.js') :
                    'main.js';
fileStream = fs.createWriteStream(
                path.join(paths.build.JS, filename),
                {
                    flags: 'w+',
                    encoding: 'utf8',
                    mode: '0666'
                }
            );

// accepts a --stdout command line argument to write on stdout
outputStream = (argv.stdout) ?
                process.stdout :
                fileStream;

bundler = (argv.type === 'vendors') ?
                    vendorsBundle() :
                    appBundle(argv.type === 'all');


bundler.bundle().pipe(outputStream);
