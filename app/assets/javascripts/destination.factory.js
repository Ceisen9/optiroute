(function(){
    "use strict";

    angular
      .module("optiroute")
      .factory("DestFactory", [
        "$resource",
        DestFactoryFunc
      ]);

    function DestFactoryFunc($resource){
      DestinationFactory = $resource("/destinations/:id.json");
      Destination.all = DestinationFactory.query();
      return Destination;
    }

})();
