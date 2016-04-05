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
        console.log(TripFactory.get({id: $stateParams.id}));
        console.log($stateParams.id);
        console.log(TripFactory.all);
        console.log(TripFactory.all[$stateParams.id]);

        TripFactory.all.forEach(function(trip) {
          if(trip.id == $stateParams.id) {
            tripsShowVM.trip = trip;
          }
        });
      });

      tripsShowVM.delete = function() {
        tripsShowVM.trip = TripFactory.get({id: $stateParams.id});

        TripFactory.all.splice($stateParams.id, 1);
        tripsShowVM.trip.$delete({id: $stateParams.id}).then(function() {
          $state.go("tripsIndex", {}, {reload: true});
        });
      }
    }
})();
