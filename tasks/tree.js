'use strict';
var asciiTree = require('ascii-tree'),
    shell = require('shelljs'),
    ls = shell.ls;

var paths = require('./paths');

// prints an ASCII tree of the files in ./dist
var distFiles = ls('-R', paths.build.ROOT),
    tree = distFiles.map(function(filename){
        return '##' + filename.replace(/([^\/]*\/)/g, '#');
    });

tree.unshift('#' + paths.build.ROOT);

console.log(asciiTree.generate(tree.join('\n')));
