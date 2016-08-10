/* globals proj4*/
(function () {
  'use strict';

  angular
    .module('app')
    .config(config);

  function config($logProvider, $provide, toastr, $mdThemingProvider) {
    // Enable log
    $logProvider.debugEnabled(true);

    $provide.decorator('$log', function ($delegate, myLogger) {
      return myLogger($delegate);
    });

    // Set options for any third part libs
    toastr.options = {
      'closeButton': true,
      'positionClass': 'toast-bottom-right',
      'timeOut': '3000'
    };

    // Define British National Grid Proj4js projection (copied from http://epsg.io/27700.js)
    proj4.defs('EPSG:27700', '+proj=tmerc +lat_0=49 +lon_0=-2 +k=0.9996012717 +x_0=400000 +y_0=-100000 +ellps=airy +towgs84=446.448,-125.157,542.06,0.15,0.247,0.842,-20.489 +units=m +no_defs');

    $mdThemingProvider.theme('default')
      .primaryPalette('light-blue')
      .accentPalette('deep-purple');
  }

})();