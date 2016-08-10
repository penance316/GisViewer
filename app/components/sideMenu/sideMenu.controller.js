(function () {
  'use strict';

  angular.module('app')
    .controller('SideMenuController', SideMenuController);

  function SideMenuController(sidePanelService) {
    var vm = this;
    vm.menuHover = false;
    vm.setSidePanelContents = sidePanelService.setActiveByHeading;
    vm.items = [
      {name: 'New File', panelHeading: '', iconClass: 'glyphicon-folder-open'},
      {name: 'Layers', panelHeading: 'Layers', iconClass: 'glyphicon-fire'},
      {name: 'Drawing Tools', panelHeading: 'Drawing Tools', iconClass: 'glyphicon-screenshot'}
    ];
  }
})();