const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');

function buildStyles() {
  return gulp.src('./src/styles/Scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./src/styles/Css'));
};

exports.buildStyles = buildStyles;
exports.watch = function () {
  gulp.watch('./src/styles/Scss/**/*.scss', buildStyles);
};