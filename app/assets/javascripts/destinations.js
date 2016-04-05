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
