var gulp = require('gulp'),
    gutil = require('gulp-util'),
    watch = require('gulp-watch'),
    eslint = require('gulp-eslint'),
    postcss = require('gulp-postcss'),
    cssnano = require('gulp-cssnano'),
    autoprefixer = require('autoprefixer'),
    cssnext = require('postcss-cssnext'),
    precss = require('precss'),
    minmax = require('postcss-media-minmax'),
    browserSync = require('browser-sync').create();


gulp.task('lint-local', () => {
  browserSync.init({
    port: 3001
  });

  return watch(['src/**/*.js', 'src/**/*.jsx', 'tools/**/*.js', 'tools/**/*.jsx', '!node_modules/**'], function () {
    gulp.src(['src/**/*.js', 'src/**/*.jsx', 'tools/**/*.js', 'tools/**/*.jsx','./node_modules/.bin/esw', '!node_modules/**'])
      .pipe(eslint())
      .pipe(eslint.format())
      .pipe(eslint.result(result => {
        // Called for each ESLint result.
        gutil.log(gutil.colors.magenta(`ESLint result: ${result.filePath}`));
        gutil.log(gutil.colors.green(`# Messages: ${result.messages.length}`));
        gutil.log(gutil.colors.yellow(`# Warnings: ${result.warningCount}`));
        gutil.log(gutil.colors.red(`# Errors: ${result.errorCount}`));
      }));
  });

});

gulp.task('lint-local2', () => {

  return function () {
    gulp.src(['src/**/*.js', 'src/**/*.jsx', 'tools/**/*.js', 'tools/**/*.jsx','./node_modules/.bin/esw', '!node_modules/**'])
      .pipe(eslint())
      .pipe(eslint.format())
      .pipe(eslint.result(result => {
        // Called for each ESLint result.
        gutil.log(gutil.colors.magenta(`ESLint result: ${result.filePath}`));
        gutil.log(gutil.colors.green(`# Messages: ${result.messages.length}`));
        gutil.log(gutil.colors.yellow(`# Warnings: ${result.warningCount}`));
        gutil.log(gutil.colors.red(`# Errors: ${result.errorCount}`));
      }));
  }();

});

gulp.task('css:build', function() {
  var plugins = [
    cssnext,
    autoprefixer({browsers: ['> 1%'], cascade: false})
  ];
  return  function () {
    gulp.src(['src/Styles/*.css'])
      .pipe(postcss(plugins))
      .pipe(gulp.dest('css'));
  }();
});


gulp.task('css', function() {
  var plugins = [
    cssnext,
    autoprefixer({browsers: ['> 1%'], cascade: false})
  ];
  return watch(['src/Styles/*.css'], function () {
    gulp.src(['src/Styles/*.css'])
      .pipe(postcss(plugins))
      .pipe(gulp.dest('css'))
      .pipe(browserSync.stream());
  });
});

gulp.task('lint', ['lint-local','css'], function () {
    return gutil.log('Welcome to gulp tasks');
});

gulp.task('lint:build', ['lint-local2'], function () {
    return gutil.log('Welcome to gulp tasks');
});