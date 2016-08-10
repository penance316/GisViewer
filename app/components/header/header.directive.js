(function () {
  'use strict';

  angular
    .module('app')
    .directive('gsHeader', header);

  function header() {
    var directive = {
      restrict: 'E',
      templateUrl: 'components/header/header.html',
      controller: 'HeaderController',
      controllerAs: 'vm'
    };

    return directive;
  }

})();