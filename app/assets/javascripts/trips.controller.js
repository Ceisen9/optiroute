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
// JGZ - I think in terms of "optimizing" this, I don't think this is hitting the DB too many times
// many-many is hard, so it makes sense that you would need to query the DB more often.
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
