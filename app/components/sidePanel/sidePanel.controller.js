(function () {
  'use strict';

  angular
    .module('app')
    .controller('SidePanelController', SidePanelController);

  function SidePanelController(sidePanelService) {
    var vm = this;
    vm.getActive = sidePanelService.getActive;
  }
})();