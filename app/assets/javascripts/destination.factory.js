(function(){
    "use strict";

    angular
      .module("optiroute")
      .factory("DestFactory", [
        "$resource",
        DestFactoryFunc
      ]);

    function DestFactoryFunc($resource){
      var DestinationFactory = $resource("/destinations/:id.json");
      DestinationFactory.all = DestinationFactory.query();
      return DestinationFactory;
    }

})();
