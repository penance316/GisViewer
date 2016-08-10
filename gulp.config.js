module.exports = function () {
  'use strict';

  var source = './app/';
  var build = 'build';

  var config = {
    client: source,
    index: source + 'index.html',
    isProduction: false,

    //Build folders
    build: {
      app: build,
      js: build + '/js',
      styles: build + '/styles'
    },

    /*
     * gulp-inject files in order and used for gulp.watch and build step
     */
    js: [
        source + 'lib/*.js', //load any libs
        source + '**/*.module.js', //load any modules first
        source + '**/*.js',
        '!' + source + 'bower_components/**/*',
        '!' + source + '**/*.exclude'
    ],
    css: [
        source + '**/*.css',
        '!' + source + 'bower_components/**/*',
        '!' + source + '**/*.exclude'
    ],
    html: [
        source + '**/*.html',
        '!' + source + 'bower_components/**/*',
        '!' + source + '**/*.exclude'
    ],

    /**
     * Bower and NPM locations
     */
    bower: {
      json: require('./bower.json'),
      jsonFile: './bower.json',
      directory: source + 'bower_components/',
      ignorePath: '../..'
    }
  };

  config.getWiredepOptions = function () {
    var options = {
      bowerJson: config.bower.json,
      directory: config.bower.directory,
      ignorePath: config.bower.ignorePath
    };
    return options;
  };

  return config;
};