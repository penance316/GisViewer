(function () {
  'use strict';

  angular
    .module('app')
    .directive('gsSideMenu', sideMenu);

  function sideMenu() {
    var directive = {
      restrict: 'E',
      templateUrl: 'components/sideMenu/sideMenu.html',
      controller: 'SideMenuController',
      controllerAs: 'vm',
      bindToController: true,
      scope: true
    };

    return directive;
  }

})();