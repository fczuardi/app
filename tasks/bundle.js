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
    runningAsScript = !module.parent;

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
// the libs parameter
function vendorsBundle(libs){
    let bundler = browserify()
                    .require(libs);
    return bundler;
}

// Bundles the app scripts.
// If the external parameter is passed then the modules on that array
// wont be included in the bundle
function appBundle(entry, external){
    let bundler = browserify({
            entries: [entry]
        })
        .transform(reactify, {
            es6: true
        });
    if (external !== undefined){
        bundler.external(external);
    }
    return bundler;
}

// What to execute when in command line mode
// Parameters:
//  --type=vendors or --type=all for bundling only libs or everything
//      if undefined just the local scripts are included in the bundle
//  --stdout to output to standard output instead of writing a file
//      if undefined the paths of ./paths.js config file will be used
function run(type, stdout){
    let filename,
        outputStream,
        bundler;

    filename = (type !== undefined) ?
                    BUNDLE_FILENAMES[argv.type.toUpperCase()] :
                    BUNDLE_FILENAMES.LOCAL;
    outputStream = (stdout) ?
                        process.stdout :
                        fileStream(filename);
    bundler = (argv.type === 'vendors') ?
                        vendorsBundle(pkg.browserLibs) :
                        appBundle(
                            pkg.browser,
                            (argv.type !== 'all') ? pkg.browserLibs : undefined
                        );
    bundler.bundle().pipe(outputStream);
}

// executing as a command line script or a node module?
if (runningAsScript){
    run(argv.type, argv.stdout);
} else{
    module.exports = {
        appBundle: appBundle,
        vendorsBundle: vendorsBundle
    };
}
