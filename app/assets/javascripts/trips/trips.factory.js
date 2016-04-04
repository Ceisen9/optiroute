(function(){
    "use strict";

    angular
      .module("trips")
      .factory("TripFactory", [
        "$resource",
        TripFactoryFunc
      ]);

    function TripFactoryFunc($resource){
      return $resource("/trips/:id.json", {}, {
        update: {method: 'PUT'}
      });
    }

})();
