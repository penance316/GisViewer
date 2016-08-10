(function () {
  'use strict';

  angular
    .module('app')
    .directive('gsMap', map);

  function map() {
    var directive = {
      restrict: 'E',
      templateUrl: 'components/map/map.html',
      controller: 'MapController',
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;
  }
})();