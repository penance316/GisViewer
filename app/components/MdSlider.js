(function () {
  'use strict';

  angular
    .module('app')
    .directive('mdSlider', MdSlider);

  function MdSlider($window) {
    // Usage: Augments the default behaviour of the material design slider by google
    var directive = {
      link: link,
      restrict: 'E'
    };
    return directive;

    function link(scope, element, attrs) {
      //if attribute exists loose-focus then do not keep the focus when using this control
      if (attrs.hasOwnProperty('loseFocus')) {
        element.on('mousedown', function () {
          angular.element($window).on('mouseup', function (event) {
            event.preventDefault();
            element[0].blur();
            angular.element($window).off('mouseup');
          });
        });
      }


    }
  }
})();