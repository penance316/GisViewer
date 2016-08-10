/* global toastr:false, _:false, ol:false */
/**
 * Define 3rd party libraries that are not angular components here to allow them to be used as dependencies and injected accordingly
 */
(function () {
  'use strict';

//  toastr popups
  angular.module('app')
    .constant('toastr', toastr);

//  underscore
  angular.module('app')
    .constant('_', _);

//  openlayers
  angular.module('app')
    .constant('ol', ol);

})();