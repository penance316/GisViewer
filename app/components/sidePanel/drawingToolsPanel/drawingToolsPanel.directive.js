(function () {
  'use strict';

  angular
    .module('app')
    .directive('gsDrawingToolsPanel', DrawingToolsPanel);

  function DrawingToolsPanel() {
    var directive = {
      restrict: 'E',
      templateUrl: 'components/sidePanel/drawingToolsPanel/drawingToolsPanel.html',
      bindToController: true,
      scope: true,
      controller: 'DrawingToolsPanelController',
      controllerAs: 'vm'
    };

    return directive;
  }

})();