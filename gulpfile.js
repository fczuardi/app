/* @flow */
(function () {
'use strict';

var gulp = require('gulp'),
    del = require('del'),
    execFile = require('child_process').execFile,
    flow = null;

try{
    flow = require('flow-bin');
} catch(err){
    console.log('Flow-bin not available');
}

var paths = {
        src: {
            HTML:   './src/html'
        },
        build: {
            ROOT:   './dist',
            WWW:    './dist/www'
        }
};

gulp.task('clean', function (cb){
    del(paths.build.ROOT +'/**', cb);
});

gulp.task('html', function(){
    gulp.src(paths.src.HTML + '/**')
        .pipe(gulp.dest(paths.build.WWW));
});

gulp.task('build', gulp.parallel(
    'html'
));

gulp.task('rebuild', gulp.series(
    'clean',
    'build'
));

//type-check files with the
// @flow
//declaration without the _
gulp.task('flow', function(cb){
    if (flow){
        var options = {
            cwd: '.',
            encoding: 'utf8',
            env: process.env,
            timeout: 0,
            maxBuffer: 200*1024,
            killSignal: 'SIGTERM'
        };
        execFile(flow, ['check'], options, function (err, stdout, stderr) {
            console.log(stdout);
            console.log(stderr);
            cb();
        });
    }
});

gulp.task('default', gulp.parallel('rebuild'));

})();
