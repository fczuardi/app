'use strict';
const   BUNDLE_FILENAMES = {
            LOCAL:      'main.js',
            VENDORS:    'vendors.js',
            ALL:        'all.js'
        };

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

// Creates a writeable stream to receive
// bundler's output and store it in a file
function fileStream(filename){
    // create the destination dir if needed
    if (!test('-d', paths.build.JS)) {
        mkdir('-p', paths.build.JS);
    }
    return fs.createWriteStream(
                path.join(paths.build.JS, filename),
                {
                    flags: 'w+',
                    encoding: 'utf8',
                    mode: '0666'
                }
    );
}

// Bundles only the 3rd party libraries as specified in
// the browserLibs attribute of package.json
function vendorsBundle(){
    return browserify()
            .require(pkg.browserLibs);
}

// Bundles the app scripts.
// Defaults to bundling without 3rd-party libraries, if the argument
// completeBundle is passed with value true then the external
// dependencies are included in the same bundle.
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

// optionally accepts a --type=vendors or --type=all command line parameter
filename = (argv.type !== undefined) ?
                BUNDLE_FILENAMES[argv.type.toUpperCase()] :
                BUNDLE_FILENAMES.LOCAL;

// accepts a --stdout command line argument to write on stdout instead
outputStream = (argv.stdout) ?
                    process.stdout :
                    fileStream(filename);

bundler = (argv.type === 'vendors') ?
                    vendorsBundle() :
                    appBundle(argv.type === 'all');

bundler.bundle().pipe(outputStream);
