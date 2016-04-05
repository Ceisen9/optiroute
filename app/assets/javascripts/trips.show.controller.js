"use strict";

(function() {
  angular.module("trips")
    .controller("tripsShowCtrl", [
      "TripFactory",
      "$state",
      "$stateParams",
      tripsShowCtrlFunction
    ]);

    function tripsShowCtrlFunction(TripFactory, $state, $stateParams) {
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

      tripsShowVM.delete = function() {
        tripsShowVM.trip = TripFactory.get({id: $stateParams.id});
        TripFactory.all.splice(TripFactory.all.indexOf(tripsShowVM.trip), 1);
        tripsShowVM.trip.$delete({id: $stateParams.id}).then(function() {
          $state.go("tripsIndex", {}, {reload: true});
        });
      }
    }
})();
