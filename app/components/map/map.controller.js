/*global ol*/
(function () {
  'use strict';

  angular
    .module('app')
    .controller('MapController', MapController);

  MapController.$inject = ['mapService', '$scope'];

  function MapController(mapService, $scope) {
    var vm = this;

    ////Interface////
    vm.layers = mapService.layers;
    vm.changeLayer = mapService.changeLayer;
    vm.center = mapService.getMapCenter();
    vm.controls = getControls();

    activate();

    ////////////////

    function activate() {
      ///Setup Events///
      vm.defaults = {
        events: {
          map: [ 'singleclick', 'pointermove' ]
        },
        controls: {
          zoom: {
            position: 'topright'
          }
        },
        interactions: {
          scrollWheelZoom: true
        }
      };

      $scope.$on('openlayers.map.pointermove', function (event, data) {
        $scope.$apply(function () {
          if (vm.center.projection === data.projection) {
            $scope.mouseposition = data.coord;
          } else {
            var p = ol.proj.transform([ data.coord[0], data.coord[1] ], data.projection, vm.center.projection);
            mapService.setCurrentPointerCoordinates(p[0], p[1]);
          }
        });
      });
    }

    function getControls() {
      return [
        {
          name: 'fullscreen',
          active: true
        },
        {
          name: 'attribution',
          active: true
        },
        {
          name: 'scaleline',
          active: true
        }
      ];
    }
  }
})();

