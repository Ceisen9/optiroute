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
      this.trips = TripFactory.all;


    }
})();
