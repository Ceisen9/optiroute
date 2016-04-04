"use strict";

(function() {
  angular.module("destinations", [
    "ngResource"
  ])
  .controller("destinationsIndexCtrl", [
    "DestFactory",
    "$stateParams",
    destinationsIndexCtrlFunction
  ])

  function destinationsIndexCtrlFunction(DestFactory, $stateParams) {
    this.destinations = DestinationFactory.query();
  }


})();
