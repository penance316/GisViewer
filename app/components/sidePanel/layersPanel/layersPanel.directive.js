(function () {
  'use strict';

  angular
    .module('app')
    .directive('gsLayersPanel', layersPanel);

  function layersPanel() {
    var directive = {
      restrict: 'E',
      templateUrl: 'components/sidePanel/layersPanel/layersPanel.html',
      controller: 'LayersPanelController',
      controllerAs: 'vm',
      bindToController: true,
      scope: true
    };

    return directive;
  }

})();