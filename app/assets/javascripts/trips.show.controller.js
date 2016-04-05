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
          if(trip.id == $stateParams.id) {
            tripsShowVM.trip = trip;
          }
        });
      });

      tripsShowVM.delete = function() {
        tripsShowVM.trip = TripFactory.get({id: $stateParams.id});
        var index;
        for (var i = 0; i < TripFactory.all.length; i++) {
          if ($stateParams.id == TripFactory.all[i].id){
            index = i;
            break;
          }
        }
        TripFactory.all.splice(index, 1);
        //TripFactory.all.splice(TripFactory.all.indexOf(tripsShowVM.trip), 1);
        tripsShowVM.trip.$delete({id: $stateParams.id}).then(function() {
          $state.go("tripsIndex", {}, {reload: true});
        });
      };
    }
})();
