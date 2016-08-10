(function () {
  'use strict';

  angular
    .module('app')
    .controller('HeaderController', HeaderController);

  HeaderController.$inject = ['$scope', 'mapService'];

  /* @ngInject */
  function HeaderController($scope, mapService) {
    var vm = this;
    vm.activate = activate;
    vm.coords = mapService.currentPointerCoordinates;


    activate();

    ////////////////

    function activate() {
    }
  }

})();