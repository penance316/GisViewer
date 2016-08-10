/*global ol*/
(function () {
  'use strict';

  angular
    .module('app')
    .controller('DrawingToolsPanelController', DrawingToolsPanelController);

  function DrawingToolsPanelController(olData, $log, $scope) {
    var vm = this;
    vm.addDrawInteraction = addDrawInteraction;

    //Private
    var selectInteraction, drawInteraction, modifyInteraction, map;

    // create a vector layer used for editing
    var drawLayer = new ol.layer.Vector({
      name: 'myDrawLayer',
      source: new ol.source.Vector(),
      style: new ol.style.Style({
        fill: new ol.style.Fill({
          color: 'rgba(255, 255, 255, 0.2)'
        }),
        stroke: new ol.style.Stroke({
          color: '#ffcc33',
          width: 2
        }),
        image: new ol.style.Circle({
          radius: 7,
          fill: new ol.style.Fill({
            color: '#ffcc33'
          })
        })
      })
    });

    // setup map reference and drawing layer
    olData.getMap($scope.id).then(
      function (mapResult) {
        map = mapResult;
        map.addLayer(drawLayer);
      });


    /////////////

    /**
     * Start drawing
     * @param type The type of drawing tool to start
     */
    function addDrawInteraction (type) {
      $log.debug('Drawing ' + type);
      cancelDrawInteractions();

      olData.getMap($scope.id).then(
        function (mapResult) {
          var map = mapResult;

          drawInteraction = new ol.interaction.Draw({
            source: drawLayer.getSource(),
            type: type
          });

          map.addInteraction(drawInteraction);
        }
      );
    }

    function cancelDrawInteractions() {
      map.removeInteraction(drawInteraction);
      map.removeInteraction(modifyInteraction);
      map.removeInteraction(selectInteraction);
    }
  }

})();
