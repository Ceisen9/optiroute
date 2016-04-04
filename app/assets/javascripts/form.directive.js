(function(){
    "use strict";

    angular
      .module("trips")
      .directive("tripForm", [
        "TripFactory",
        "$state",
        tripFormFunc
      ]);

    function tripFormFunc(TripFactory, $state){
      return {
        templateUrl: "ng-views/trip.form.html",
        scope: {
          trip: '=',
          destinations: '='
        },
        link: linkFunc
      };

      function linkFunc(scope){
        // Placeholder until trip<->destination associations setup
        scope.create = function(){
          scope.trip.save(function(response){
            $state.go("tripShow", {}, {reload: true});
          });
        };
      }
    }
})();
