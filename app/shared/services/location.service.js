(function () {
  'use strict';

  angular
    .module('app')
    .factory('locationService', locationService);

  function locationService($log, _, $http) {
    var postcodeApiUrl = 'http://api.postcodes.io/postcodes';
    var postcodeQueries = [];
    var DELAY = 200; // 200 ms

    var service = {
      lookupPostcode: lookupPostcode,
      lookupPostcodes: lookupPostcodes
    };


    return service;

    ////////////////////

    function lookupPostcode(postcode) {
      return $http.get(postcodeApiUrl + '/' + postcode);
    }

    function lookupPostcodes(postcode) {
      return $http.get(postcodeApiUrl + '/?q=' + postcode);
    }
  }

})();