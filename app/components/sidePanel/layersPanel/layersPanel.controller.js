(function () {
  'use strict';

  angular
    .module('app')
    .controller('LayersPanelController', LayersPanelController);

  function LayersPanelController($log, mapService, sidePanelService) {
    var vm = this;
    vm.layers = mapService.layers;
    vm.selectLayer = mapService.activateLayer;

    vm.sortableOptions = {
      handle: '> .pois-list-handle',
      update: function (e, ui) {
        var vm = this;
        $log.debug('index is now : ' + ui.item.sortable.dropindex);
        $log.debug('for : ' + ui.item.sortable.model.name);
        _.findWhere(vm.layers, ui.item.sortable.model).zindex = ui.item.sortable.dropindex; //update zindex of layers after drag
      }.bind(vm)
    };
  }
})();