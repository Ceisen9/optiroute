"use strict";

(function() {
  angular.module("trips")
    .controller("tripsShowCtrl", [
      "TripFactory",
      "$stateParams",
      tripsShowCtrlFunction
    ]);

    function tripsShowCtrlFunction(TripFactory, $stateParams) {
      var tripsShowVM = this;
      TripFactory.all.$promise.then(function(){
        TripFactory.all.forEach(function(trip) {
          console.log(trip);
          console.log($stateParams);
          if(trip.id == $stateParams.id) {
            tripsShowVM.trip = trip;
          }
        });
      });
    }
})();
