(function () {
  'use strict';

  angular
    .module('app')
    .factory('myLogger', function (toastr) {
      return function ($delegate) {
        return  {
          log: function () {
            $delegate.log(arguments);
          },
          info: function () {
            $delegate.info(arguments);
            toastr.info(arguments[0]);
          },
          error: function () {
            $delegate.error(arguments);
            toastr.error(arguments[0]);
          },
          warn: function () {
            $delegate.warn(arguments);
            toastr.warning(arguments[0]);
          },
          debug: function () {
            $delegate.debug(arguments);
          }
        };
      };
    });

})();