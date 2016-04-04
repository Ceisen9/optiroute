"use strict";

(function() {
  angular.module("trips")
    .controller("tripsIndexCtrl", [
      "TripFactory",
      tripsIndexCtrlFunction
    ]);

    function tripsIndexCtrlFunction(TripFactory) {
      this.trips = TripFactory.all;
    }
})();
