var gulp = require('gulp');
var sass = require('gulp-sass');
var sassGlob = require('gulp-sass-glob');
var config = require('./config.js');

gulp.task('default', function(){
});

gulp.task('sass', function(){
  return gulp.src(config.assets + '/**/*.scss')
  .pipe(sassGlob())
  .pipe(sass({ outputStyle: 'expanded' }))
  .pipe(gulp.dest(config.build));
});
