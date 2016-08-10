(function () {
  'use strict';

  angular
    .module('app')
    .factory('sidePanelService', sidePanelService);

  function sidePanelService($log, _, $rootScope) {

    var service = {
      setActiveByHeading: setActiveByHeading,
      getActive: getActive
    };

    service.panels = [
      { heading: 'Layers' },
      { heading: 'Drawing Tools' }
    ];

    //Defaults
    var activePanel = service.panels[0];

    return service;

    ///////////////////
    function setActiveByHeading(heading) {
      activePanel = _.findWhere(service.panels, { heading: heading });
    }

    function getActive() {
      return activePanel;
    }
  }

})();