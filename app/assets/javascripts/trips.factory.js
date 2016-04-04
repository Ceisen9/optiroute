(function(){
    "use strict";

    angular
      .module("trips")
      .factory("TripFactory", [
        "$resource",
        "ItineraryFactory",
        "DestFactory",
        TripFactoryFunc
      ]);

    function TripFactoryFunc($resource, ItineraryFactory, DestFactory){
      var TripFactory = $resource("/trips/:id.json", {}, {
        update: {method: 'PUT'}
      });
      TripFactory.all = TripFactory.query();

      return TripFactory;
    }

})();
