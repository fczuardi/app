'use strict';
var path = require('path');

var shell = require('shelljs'),
    cp      = shell.cp,
    echo    = shell.echo,
    env     = shell.env,
    exec    = shell.exec,
    find    = shell.find,
    sed     = shell.sed,
    test    = shell.test;

var paths = require('./paths');

var cmd = 'jsx -x jsx ' + paths.src.ROOT + ' ' + paths.transpiled.ROOT;

//adds node_modules/.bin to the PATH
env.PATH += ':' + path.join(__dirname, '../','node_modules', '.bin');

//transpile using jsx command line tool from react-tools
echo(cmd);
exec(cmd, {});

//replaces jsx double-quotes with my personal preference single-quotes
find(paths.transpiled.COMPONENTS).map(function(filename){
    if (test('-f', filename)){
        sed('-i', /\"/g, '\'', filename);
    }
});

//add .jshintrc and README.md files to the traspile dir
cp('-f', path.join(paths.docs.ROOT, 'transpiled_README.md'),
                    path.join(paths.transpiled.ROOT, 'README.md'));
cp('-f', path.join(paths.src.ROOT, '.jshintrc'),
                    path.join(paths.transpiled.ROOT, '.'));
