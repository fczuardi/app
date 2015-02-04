'use strict';
let gulp = require('gulp'),
    del = require('del');

const paths = {
        src: {
            HTML:   './src/html'
        },
        build: {
            ROOT:   './dist',
            WWW:    './dist/www'
        }
};

var test_name = "foo";

console.log(test_name);

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

gulp.task('default', gulp.parallel('rebuild'));
