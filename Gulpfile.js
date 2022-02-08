/**
 * Compile .scss source to .css
 */

var gulp = require('gulp');
 watch = require('gulp-watch');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var concat = require("gulp-concat");
var minifyCss = require("gulp-minify-css");
var uglify = require("gulp-uglify");



gulp.task('default', function() {
    gulp.src(['scss/main.scss'])
        .pipe(sass({outputStyle: 'expanded', follow: true}).on('error', sass.logError))
        .pipe(gulp.dest("css"))
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(minifyCss())
        //.pipe(browserSync.stream());
});


gulp.task('watch', ['default'], function() {
    gulp.watch(['scss/*.scss'], ['default']);
});
// gulp.task('default', ['serve']);