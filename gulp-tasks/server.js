(function() {
  'use strict';

  var gulp = require('gulp'),
    gulpPlugins = require('gulp-load-plugins')(),
    runSequence = require('run-sequence'),
    open = require('open'),
    $ = require('gulp-load-plugins')({lazyload: true});

//server and live reload config
  var serverConfig = {
    root: ['./app'],
    host: 'localhost',
    port: 9000,
    livereload: true
  };

  /*============================================================
   =>                          Server
   ============================================================*/

  gulp.task('server', function () {
    $.util.log('------------------>>>> firing server  <<<<-----------------------');
    $.connect.server(serverConfig);

    $.util.log('Started connect web server on http://localhost:' + serverConfig.port + '.');
    open('http://localhost:' + serverConfig.port);
  });

  gulp.task('server:dev', function () {
    runSequence('wiredep', 'watch', 'server');
  });

})();
