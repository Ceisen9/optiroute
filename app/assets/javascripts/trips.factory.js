(function(){
    "use strict";

    angular
      .module("trips")
      .factory("TripFactory", [
        "$resource",
        TripFactoryFunc
      ]);

    function TripFactoryFunc($resource){
      var TripFactory = $resource("/trips/:id.json", {}, {
        update: {method: 'PUT'}
      });
      TripFactory.all = TripFactory.query();
      return TripFactory;
    }

})();
