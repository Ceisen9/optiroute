(function(){
    "use strict";

    angular
      .module("trips")
      .factory("TripFactory", [
        "$resource",
        "ItineraryFactory",
        "DestinationFactory",
        TripFactoryFunc
      ]);

    function TripFactoryFunc($resource, ItineraryFactory, DestinationFactory){
      var TripFactory = $resource("/trips/:id.json", {}, {
        update: {method: 'PUT'}
      });

      //create destinations attribue on each trip and populate with the correct destinations
      //loop through itinerary
      ItineraryFactory.all.$promise.then(function () {
        ItineraryFactory.all.forEach(function(itinerary) {
          //loop through all trips
          TripFactory.all.$promise.then(function() {
            TripFactory.all.forEach(function(trip) {
              //create a destinations attribute for each trip
              trip.destinations = [];
              //find all instances of the current trip in the itinerary
              if (trip.id == itinerary.trip_id) {
                //for that trip find all destinations that have the corresponding destination_id
                DestinationFactory.all.$promise.then(function() {
                  DestinationFactory.all.forEach(function(destination) {
                    if (destination.id == itinerary.destination_id) {
                      //add the corresponding destinations to the current trip
                      trip.destinations.push(destination);
                    }
                  });
                });
              }
            });
          });
        });
      });

      TripFactory.all = TripFactory.query();
      return TripFactory;
    }

})();
