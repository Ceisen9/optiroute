(function(){
    "use strict";

    angular
      .module("optiroute")
      .factory("ItineraryFactory", [
        "$resource",
        ItineraryFactoryFunc
      ]);

    function ItineraryFactoryFunc($resource){
      var ItineraryFactory = $resource("/itineraries/:id.json", {}, {
        update: {method: "PUT"}
      });
      ItineraryFactory.all = ItineraryFactory.query();
      return ItineraryFactory;
    }

})();
