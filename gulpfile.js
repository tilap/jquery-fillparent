'use strict';

var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),

    sourceFiles = ['src/jquery.fillparent.js'],
    dist = '.';

gulp.task('build', function() {
    return gulp.src(sourceFiles)
        .pipe( jshint() )
        .pipe(gulp.dest( dist ))
        .pipe( uglify() )
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest( dist ));
});