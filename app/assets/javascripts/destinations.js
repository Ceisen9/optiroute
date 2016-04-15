// JGZ - Doesn't look like this is being used at all actually, am I wrong?
// I'm seeing a route in optiroute.js, but no view.

"use strict";

(function() {
  angular.module("destinations", [
    "ngResource"
  ])
  .controller("destinationsIndexCtrl", [
    "DestinationFactory",
    "$stateParams",
    destinationsIndexCtrlFunction
  ])

  function destinationsIndexCtrlFunction(DestinationFactory, $stateParams) {
    this.destinations = DestinationFactory.query();
  }


})();
