"use strict";

(function() {
  angular
  .module("optiroute")
  .directive("tripForm", [
    "DestinationFactory",
    "$state",
    tripFormDirectiveFunction
  ]);

  function tripFormDirectiveFunction(DestinationFactory, $state){
    this.destinations = DestinationFactory.query();
    return{
      templateUrl: "ng-views/trips.form.html",
      scope: {
        destinations: "=",
        trip: "=",
      }
    }
  }
}());
