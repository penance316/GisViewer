(function () {

  'use strict';

  var gulp = require('gulp'),
    $ = require('gulp-load-plugins')({lazyload: true}),
    runSequence = require('run-sequence'),
    config = require('./gulp.config')(),
    open = require('open'),
    requireDir = require('require-dir');

  requireDir('./gulp-tasks');

  gulp.task('default', ['server:dev']);

  gulp.task('help', $.taskListing);
  gulp.task('tasks', $.taskListing);

})();