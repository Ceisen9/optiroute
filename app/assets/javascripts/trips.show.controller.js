"use strict";

(function() {
  angular.module("trips")
  .controller("tripsShowCtrl", [
    "TripFactory",
    "$state",
    "$stateParams",
    tripsShowCtrlFunction
  ]);

  function tripsShowCtrlFunction(TripFactory, $state, $stateParams) {
    var tripsShowVM = this;
    TripFactory.all.$promise.then(function(){
      TripFactory.all.forEach(function(trip) {
        if(trip.id == $stateParams.id) {
          tripsShowVM.trip = trip;
        }
      });
    });

    tripsShowVM.delete = function() {
      TripFactory.all.splice($stateParams.id, 1);
      tripsShowVM.trip.$delete({id: $stateParams.id}).then(function() {
        TripFactory.all = TripFactory.query(function(){
          $state.go("tripsIndex", {}, {reload: true});
        });
      });

    }

    // JGZ - I'm not 100% sure how to do this yet, but I'm feeling like rendering maps should be moved into a directive
    var map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 38.901052, lng: -77.031325},
      zoom: 10,
      scrollwheel: false
    });
    tripsShowVM.generateDirections = function() {

      var directionsService = new google.maps.DirectionsService;
      var directionsDisplay = new google.maps.DirectionsRenderer;
      directionsDisplay.setMap(map);
      directionsDisplay.setPanel(document.getElementById("directions-panel"));

      var waypoints = [];

      setTimeout(function() {

        tripsShowVM.trip.destinations.forEach(function(destination) {
          if (destination.address !== tripsShowVM.trip.start && destination.address !== tripsShowVM.trip.end) {
            waypoints.push({location: destination.address});
          }
        });

        directionsService.route({
          origin: tripsShowVM.trip.start,
          destination: tripsShowVM.trip.end,
          waypoints: waypoints,
          optimizeWaypoints: true,
          travelMode: google.maps.TravelMode.DRIVING
        }, function(response, status) {
          if (status === google.maps.DirectionsStatus.OK) {
            directionsDisplay.setDirections(response);
          }
        });


      }, 100);
    }
    $('.modal-trigger').leanModal({
      dismissible: true, // Modal can be dismissed by clicking outside of the modal
      opacity: .5, // Opacity of modal background
      in_duration: 300, // Transition in duration
      out_duration: 200, // Transition out duration
    }
  );


}
})();
