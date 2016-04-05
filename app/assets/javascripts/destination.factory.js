(function(){
    "use strict";

    angular
      .module("optiroute")
      .factory("DestinationFactory", [
        "$resource",
        DestinationFactoryFunc
      ]);

    function DestinationFactoryFunc($resource){
      var DestinationFactory = $resource("/destinations/:id.json");
      DestinationFactory.all = DestinationFactory.query();
      return DestinationFactory;
    }

})();
