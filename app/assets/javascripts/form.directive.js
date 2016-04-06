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
          var start_array = [];
          var end_array = [];
          for(var i in scope.trip.selectedStart) {
            start_array.push(i)
          };
          for(var i in scope.trip.selectedEnd) {
            end_array.push(i)
          };

          var start = start_array[start_array.length - 1];
          var end = end_array[end_array.length - 1];
          // console.log(start);
          // console.log(end);

          var destinations = scope.trip.selectedDestinations;
          // console.log(destinations);
          if(destinations[start]){destinations[start] = false};
          if(destinations[end]){destinations[end] = false};
          // console.log(destinations);

          scope.trip.$save().then(function(response) {


            for (var id in destinations) {
              if (destinations[id]) {
                ItineraryFactory.save({trip_id: response.id, destination_id: id}, function(data) {
                  // console.log(data);
                });
              }
            }
            if(end) {
              ItineraryFactory.save({trip_id: response.id, destination_id: end})
            };
          });
          // TripFactory.save(scope.trip, function(response){
          //   $state.go("tripShow", {}, {reload: true});
          // });
        };
      }
    }
})();
