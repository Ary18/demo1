// jshint ignore:start

var gulp = require('gulp');
var gutil = require('gulp-util');
var jshint = require('gulp-jshint');

gulp.task('jshint',function(){
    return gulp.src('source/javascript/*.js').pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('copiaHtml',function(){
    gulp.src('source/html/*.html').pipe(gulp.dest('dist/html'));
    gulp.src('source/css/*.css').pipe(gulp.dest('dist/css'));
    gulp.src('source/javascript/*.js').pipe(gulp.dest('dist/javascript'));
});