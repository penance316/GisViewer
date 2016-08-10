(function () {
  'use strict';

  var gulp = require('gulp'),
    $ = require('gulp-load-plugins')({lazyload: true});

  gulp.task('clean', function () {
    return gulp.src(['build', 'dist'], {read: false})
      .pipe($.clean());
  });

})();