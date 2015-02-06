'use strict';
var path = require('path');

var shell = require('shelljs'),
    echo    = shell.echo,
    env     = shell.env,
    exec    = shell.exec,
    find    = shell.find;

var paths = require('./paths');

//adds node_modules/.bin to the PATH
env.PATH += ':' + path.join(__dirname, '../','node_modules', '.bin');

var uncompressed = find(paths.build.JS).filter(function(filename){
                        return  (
                            (filename.indexOf('.min.js') === -1) &&
                            (filename !== paths.build.JS)
                                );
                    });


uncompressed.map(function(filename){
    var cmd = 'uglifyjs -c warnings=false -m -o ' +
                filename.replace('.js', '.min.js') + ' ' +
                filename;
    echo('> ' + cmd);
    exec(cmd);
});
