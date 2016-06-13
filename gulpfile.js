
/*globals console, require, process */

var gulp = require('gulp');
var gutil = require('gulp-util');
var bower = require('bower');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var sh = require('shelljs');

var paths = {
    sass: ['./www/components/**/*.scss']
};

gulp.task('sass', function (done) {
    'use strict';
    gulp.src('./www/components/all.scss')
        .pipe(sass()).on('error', sass.logError)
        .pipe(gulp.dest('./www/components/'))
        .pipe(minifyCss({ keepSpecialComments: 0}))
        .pipe(rename({ extname: '.min.css' }))
        .pipe(gulp.dest('./www/components/'))
        .on('end', done);
});

gulp.task('install', ['git-check'], function () {
    'use strict';
    return bower.commands.install()
        .on('log', function (data) {
            gutil.log('bower', gutil.colors.cyan(data.id), data.message);
        });
});

gulp.task('git-check', function (done) {
    'use strict';
    if (!sh.which('git')) {
        console.log(
            '  ' + gutil.colors.red('Git is not installed.'),
            '\n  Git, the version control system, is required to download Ionic.',
            '\n  Download git here:',
            gutil.colors.cyan('http://git-scm.com/downloads') + '.',
            '\n  Once git is installed, run \'' + gutil.colors.cyan('gulp install') + '\' again.'
        );
        process.exit(1);
    }
    done();
});

gulp.task('watch', function () {
    'use strict';
    gulp.watch(paths.sass, ['sass']);
});

gulp.task('default', ['sass', 'watch']);
