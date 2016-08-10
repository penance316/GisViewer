(function () {
  'use strict';

  var gulp = require('gulp'),
    $ = require('gulp-load-plugins')({lazyload: true}),
    config = require('../gulp.config')();

  gulp.task('wiredep', function () {
    $.util.log('Wiredepping Bower, lib and project JS and CSS files');
    var wiredepOptions = config.getWiredepOptions();
    var wiredep = require('wiredep').stream;

    return gulp
      .src(config.index)
      .pipe(wiredep(wiredepOptions))
      .pipe(
      $.inject(
        gulp.src(config.js, {read: false}), {ignorePath: '/app'}))
      .pipe(
      $.inject(
        gulp.src(config.css, {read: false}), {ignorePath: '/app'}))
      .pipe(gulp.dest(config.client));
  });

})();