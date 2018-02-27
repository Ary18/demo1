// jshint ignore:start
//jshint esversion:6

var gulp = require('gulp');
var gutil = require('gulp-util');
var jshint = require('gulp-jshint');
const sass = require('gulp-sass');

gulp.task('jshint',function(){
    return gulp.src('source/javascript/*.js').pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('copiaHtml',function(){
    gulp.src('source/html/*.html').pipe(gulp.dest('dist/html'));
    gulp.src('source/css/*.css').pipe(gulp.dest('dist/css'));
    gulp.src('source/javascript/*.js').pipe(gulp.dest('dist/javascript'));
});

gulp.task('sass', function (){
    return gulp.src('./scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

gulp.task('sass:watch', function (){
    gulp.watch('./scss/*.scss', ['sass']);
});