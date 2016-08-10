(function () {
  'use strict';

  var gulp = require('gulp'),
    runSequence = require('run-sequence'),
    config = require('../gulp.config')(),
    $ = require('gulp-load-plugins')({lazyload: true});

  gulp.task('watch', function () {
    var watchedFiles = [];

    $.util.log('watching js, css and html files......');

    watchedFiles.push(gulp.watch(config.js));
    watchedFiles.push(gulp.watch(config.css));
    watchedFiles.push(gulp.watch(config.html));

//    gulp.watch('app/**/*.js', ['server:reload']);
//    gulp.watch('app/**/*.css', ['server:reload']);
//    gulp.watch('app/**/*.html', ['server:reload']);


    // Log change/delete
    var onChange = function (event) {
      $.util.log('----------------------->>>> File ' + event.path + ' was ----->>>> ' + event.type);
      gulp.src( event.path)
        .pipe( $.connect.reload());
    };
    watchedFiles.forEach(function (watchedFile) {
      watchedFile.on('change', onChange);
    });
  });


})();
