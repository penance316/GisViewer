(function () {
  'use strict';

  angular
    .module('app')
    .directive('coordinatesLabel', coordinatesLabel);

  function coordinatesLabel() {
    var directive = {
      restrict: 'E',
      templateUrl: 'components/map/coordinatesLabel/coordinatesLabel.html',
      scope: true,
      bindToController: true, //required in 1.3+ with controllerAs - because the scope is isolated
      controllerAs: 'vm',
      controller: function ($scope, mapService, $log, locationService) {
        var vm = this;
        vm.coords = mapService.getCurrentPointerCoordinates();

        vm.postCodeKeyUped = function (event) {
          if (event.keyCode === 13) {
            var input = event.target.value;
            if (!isNaN(input[0])) {
              var coordinatesArray = input.split(' ');
              mapService.setMapCenter(parseInt(coordinatesArray[0]), parseInt(coordinatesArray[1]));
            } else {

              var addresses = locationService.lookupPostcodes(input)
                .success(function (data) {
                  var postcodes = (data.result === null) ? [] : data.result;
                  var newEasting;
                  var newNorthing;

                  if (postcodes.length > 0) {
                    var totalEastings = 0;
                    var totalNorthings = 0;
                    for (var i = 0; i < postcodes.length; i++) {
                      totalEastings += postcodes[i].eastings;
                      totalNorthings += postcodes[i].northings;
                    }
                    newEasting = totalEastings / postcodes.length;
                    newNorthing = totalNorthings / postcodes.length;
                  }
                  mapService.setMapCenter(newEasting, newNorthing);
                });
            }
          }
        };
      }
    };

    return directive;
  }

})();
