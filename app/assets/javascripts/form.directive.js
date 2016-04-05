(function(){
    "use strict";

    angular
      .module("trips")
      .directive("tripForm", [
        "TripFactory",
        "ItineraryFactory",
        "$state",
        tripFormFunc
      ]);

    function tripFormFunc(TripFactory, ItineraryFactory, $state){
      return {
        templateUrl: "ng-views/trips.form.html",
        scope: {
          trip: '=',
          destinations: '='
        },
        link: linkFunc
      };

      function linkFunc(scope){
        // Placeholder until trip<->destination associations setup
        scope.create = function(){
          var destinations = scope.trip.selectedDestinations;
          var newItinerary = new ItineraryFactory();
          scope.trip.$save().then(function(response) {
            for (var id in destinations) {
              if (destinations[id]) {
                newItinerary.$save({trip_id: response.id, destination_id: id}, function(data) {
                  console.log(data);
                });

              }
            }
          });
          // TripFactory.save(scope.trip, function(response){
          //   $state.go("tripShow", {}, {reload: true});
          // });
        };
      }
    }
})();
