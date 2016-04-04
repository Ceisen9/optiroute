"use strict";

(function() {
  angular
  .module("optiroute")
  .controller("tripFormController", [
    "DestinationFactory",
    tripFormControllerFunction
  ]);

  function tripFormControllerFunction(DestinationFactory){
    this.destinations = DestinationFactory.query();
  };


}());
