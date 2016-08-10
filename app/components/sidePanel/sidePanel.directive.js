(function () {
  'use strict';

  angular
    .module('app')
    .directive('gsSidePanel', sidePanel);

  function sidePanel() {
    var directive = {
      restrict: 'E',
      templateUrl: 'components/sidePanel/sidePanel.html',
      controller: 'SidePanelController',
      controllerAs: 'vm',
      bindToController: true,
      scope: true
    };

    return directive;
  }

})();