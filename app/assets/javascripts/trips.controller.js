"use strict";

(function() {
  angular.module("trips")
  .controller("tripsIndexCtrl", [
    "TripFactory",
    "ItineraryFactory",
    "DestinationFactory",
    tripsIndexCtrlFunction
  ]);

  function tripsIndexCtrlFunction(TripFactory, ItineraryFactory, DestinationFactory) {
    this.trips = TripFactory.all
    this.destinations = DestinationFactory.all;
    this.newTrip = new TripFactory();
    this.newItinerary = new ItineraryFactory();

    $('.modal-trigger').leanModal({
      dismissible: true, // Modal can be dismissed by clicking outside of the modal
      opacity: .5, // Opacity of modal background
      in_duration: 300, // Transition in duration
      out_duration: 200, // Transition out duration
    }
  );
}
})();
