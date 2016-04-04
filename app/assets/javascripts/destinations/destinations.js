"use strict";

(function() {
  angular.module("destinations", [
    "ngResource"
  ])
  .factory("DestinationFactory", [
    "$resource",
    DestinationFactoryFunction
  ])
  .controller("destinationsIndexCtrl", [
    "DestinationFactory",
    "$stateParams",
    destinationsIndexCtrlFunction
  ])

  function DestinationFactoryFunction($resource) {
    var Destination = $resource("/destinations/:id.json", {}, {
      update: {method: "PUT"}
    });
    Destination.all = Destination.query();
    return Destination;
  }

  function destinationsIndexCtrlFunction(DestinationFactory, $stateParams) {
    this.destinations = DestinationFactory.all;
  }


})();
