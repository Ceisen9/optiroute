(function(){
    "use strict";

    angular
      .module("optiroute")
      .factory("DestFactory", [
        "$resource",
        DestFactoryFunc
      ]);

    function DestFactoryFunc($resource){
      return $resource("/destinations/:id.json");
    }

})();
