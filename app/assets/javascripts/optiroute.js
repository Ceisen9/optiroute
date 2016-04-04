//= require angular.min
//= require angular-resource.min
//= require angular-ui-router.min

"use strict";

(function() {
  angular.module("optiroute", [
    "ui.router",
    "trips",
    "destinations"
  ])
  .config([
    "$stateProvider",
    RouterFunction
  ]);

  function RouterFunction($stateProvider) {
    $stateProvider
      .state("tripsIndex", {
        url: "/",
        templateUrl: "ng-views/trips.index.html",
        controller: "tripsIndexCtrl",
        controllerAs: "tripsIndexVM"
      })
      .state("destinationsIndex", {
        url: "/destinations",
        templateUrl: "ng-views/destinations.index.html",
        controller: "destinationsIndexCtrl",
        controllerAs: "destinationsIndexVM"
      })
      .state("tripForm", {
        url: "/trips/new",
        templateUrl: "ng-views/trips.form.html",
        controller: "tripFormController",
        controllerAs: "tripFormVM"
      })
      .state("tripsShow", {
        url: "/trips/:id",
        templateUrl: "ng-views/trips.show.html",
        controller: "tripsShowCtrl",
        controllerAs: "tripsShowVM"
      });
    }
})();
