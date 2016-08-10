(function () {
  'use strict';

  angular
    .module('app')
    .factory('mapService', mapService);

  function mapService($log, _) {
    var currentPointerCoordinates = [0, 0];
    var mapCenter = {
      lat: 101884,
      lon: 505118,
      projection: 'EPSG:27700',
      zoom: 19
    };

    var service = {
      changeLayer: changeLayer,
      activateLayer: activateLayer,
      setLayerZindex: setLayerZindex,
      getCurrentPointerCoordinates: getCurrentPointerCoordinates,
      setCurrentPointerCoordinates: setCurrentPointerCoordinates,
      setMapCenter: setMapCenter,
      getMapCenter: getMapCenter
    };

    //todo refactor into getter function
    service.layers = [
/*      {
        name: 'OpenStreetMap',
        desc: 'Some free map',
        active: true,
        zindex: 0,
        opacity: 1.0,
        source: {
          type: 'OSM'
        }
      },*/

      {
        name: 'MasterMap',
        desc: 'the master of all maps',
        active: false,
        zindex: 5,
        opacity: 1.0,
        source: {
          url: 'WMSServer URL HERE',
          type: 'TileWMS',
          crossOrigin: null,
          params: {
            'LAYERS': '0,1,2,3,4,5,6',
            'FORMAT': 'image/png',
            'TILED': true,
            'STYLES': 'default,default,default,default,default,default,default'
          }
        }
      },
      {
        name: 'Street View',
        desc: 'to view the streets',
        active: false,
        zindex: 6,
        opacity: 1.0,
        source: {
          url: 'WMSServer URL HERE',
          type: 'TileWMS',
          crossOrigin: null,
          params: {
            'LAYERS': '0',
            'FORMAT': 'image/png',
            'TILED': true,
            'STYLE': 'default'
          }
        }
      },
      {
        name: 'Historical',
        desc: 'old timey',
        active: false,
        zindex: 7,
        opacity: 1.0,
        source: {
          url: 'WMSServer URL HERE',
          type: 'TileWMS',
          crossOrigin: null,
          params: {
            'LAYERS': '0',
            'FORMAT': 'image/png',
            'TILED': true,
            'STYLE': 'default'
          }
        }
      },
      {
        name: 'GISV_Enviro Data',
        desc: 'GISV_Enviro Data',
        active: false,
        zindex: 7,
        opacity: 1.0,
        source: {
          url: 'WMSServer URL HERE',
          type: 'TileWMS',
          crossOrigin: null,
          params: {
            'LAYERS': '0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30',
            'FORMAT': 'image/png',
            'TILED': true,
            'STYLE': 'default'
          }
        }
      }
    ];


    return service;

    ////////////////////

    function changeLayer(layer) {
      service.layers.map(function (l) {
        l.active = (l === layer);
      });
    }

    function activateLayer(layer) {
      var foundLayer = _.findWhere(service.layers, layer);
      foundLayer.active = !foundLayer.active;
    }

    function setLayerZindex(layer, zindex) {
      _.findWhere(service.layers, layer).zIndex = zindex;
    }

    function getCurrentPointerCoordinates() {
      return currentPointerCoordinates;
    }

    function setCurrentPointerCoordinates(lat, long) {
      currentPointerCoordinates[0] = lat;
      currentPointerCoordinates[1] = long;
    }

    function setMapCenter(eastings, northings) {
      mapCenter.lat = northings;
      mapCenter.lon = eastings;
    }

    function getMapCenter() {
      return mapCenter;
    }

  }

})();

