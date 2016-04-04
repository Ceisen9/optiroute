"use strict";

(function() {
  angular.module("trips")
    .controller("tripsIndexCtrl", [
      "TripFactory",
      "ItineraryFactory",
      "DestFactory",
      tripsIndexCtrlFunction
    ]);

    function tripsIndexCtrlFunction(TripFactory, ItineraryFactory, DestFactory) {
      // this.trips = TripFactory.all;

      //create destinations attribue on each trip and populate with the correct destinations
      console.log(ItineraryFactory.all);
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
                DestFactory.all.$promise.then(function() {
                  DestFactory.all.forEach(function(destination) {
                    if (destination.id == itinerary.destination_id) {
                      //add the corresponding destinations to the current trip
                      trip.destinations.push(destination);
                      TripFactory.update({id: trip.id}, trip.destinations);
                    }
                  });
                });
              }
            });
          });
        });
      });
    }
})();
