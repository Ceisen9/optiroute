"use strict";

(function() {
  angular.module("trips")
    .controller("tripsIndexCtrl", [
      "TripFactory",
      "ItineraryFactory",
      "DestinationFactory",
      tripsIndexCtrlFunction
    ]);

    function tripsIndexCtrlFunction(TripFactory, ItineraryFactory, DestinationFactory) {
      this.trips = TripFactory.all;
      this.destinations = DestinationFactory.all;
      this.newTrip = new TripFactory();
      this.newItinerary = new ItineraryFactory();
    }
})();
