(function () {
  'use strict';

  angular
    .module('app')
    .filter('coordinatesFilter', coordinatesFilter);

  function coordinatesFilter(_, ol) {
    return function (latLongArray, projectFrom, projectTo) {

      // Ensure that the passed in data is a number
      if (!_.isString(projectFrom) || !_.isString(projectTo)) {
        return latLongArray;
      } else {
        return ol.proj.transform(latLongArray, projectFrom, projectTo);
      }
    };
  }

})();