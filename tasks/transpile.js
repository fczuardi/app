'use strict';
var path = require('path');

var shell = require('shelljs'),
    exec = shell.exec,
    echo = shell.echo,
    env = shell.env,
    cp = shell.cp;

var paths = require('./paths');

var cmd = 'jsx -x jsx ' + paths.src.ROOT + ' ' + paths.transpiled.ROOT;

//adds node_modules/.bin to the PATH
env.PATH += ':' + path.join(__dirname, '../','node_modules', '.bin');

//transpile using jsx command line tool from react-tools
echo(cmd);
exec(cmd, {});

//add .jshintrc and README.md files to the traspile dir
cp('-f', path.join(paths.docs.ROOT, 'transpiled_README.md'),
                    path.join(paths.transpiled.ROOT, 'README.md'));
cp('-f', path.join(paths.src.ROOT, '.jshintrc'),
                    path.join(paths.transpiled.ROOT, '.'));
