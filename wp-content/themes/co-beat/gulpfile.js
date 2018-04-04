var gulp = require('gulp');
var sass = require('gulp-sass');
var sassGlob = require('gulp-sass-glob');
var plumber = require('gulp-plumber');
var config = require('./config.js');
var notify  = require('gulp-notify');
var postcss  = require('gulp-postcss');
var autoprefixer  = require('autoprefixer');
var mqpacker = require('css-mqpacker');

gulp.task('sass', function(){
  return gulp.src(config.assets + '/**/*.scss')
  .pipe(plumber({
    errorHandler: notify.onError('Error: <%= error.message %>')
  }))
  .pipe(sassGlob())
  .pipe(sass({ outputStyle: 'expanded' }))
  .pipe(postcss([
    autoprefixer({browsers: config.targetBrowsers}),
    mqpacker()
  ]))
  .pipe(gulp.dest(config.build));
});

gulp.task('watch', function(){
  gulp.watch(config.assets + '/**/*.scss', ['sass']);
});

gulp.task('default', ['watch']);
