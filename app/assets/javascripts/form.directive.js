//= require map-places

(function(){
    "use strict";

    angular
      .module("trips")
      .directive("tripForm", [
        "TripFactory",
        "ItineraryFactory",
        "DestinationFactory",
        "$state",
        tripFormFunc
      ]);

    function tripFormFunc(TripFactory, ItineraryFactory, DestinationFactory, $state){
      return {
        templateUrl: "ng-views/trips.form.html",
        scope: {
          trip: '=',
        },
        link: linkFunc
      };

      function linkFunc(scope){
        var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 38.901052, lng: -77.031325},
          zoom: 12
        });
        var input = document.getElementById('pac-input');

        var types = document.getElementById('type-selector');
        // map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
        // map.controls[google.maps.ControlPosition.TOP_LEFT].push(types);

        var autocomplete = new google.maps.places.Autocomplete(input);
        autocomplete.bindTo('bounds', map);

        var infowindow = new google.maps.InfoWindow();
        var marker = new google.maps.Marker({
          map: map,
          anchorPoint: new google.maps.Point(0, -29)
        });

        scope.destinations = [];
        autocomplete.addListener('place_changed', function() {
          infowindow.close();
          marker.setVisible(false);
          var place = autocomplete.getPlace();
          if (!place.geometry) {
            window.alert("Autocomplete's returned place contains no geometry");
            return;
          } else {
            scope.destinations.push({address: place.formatted_address, name: place.name});
            $("#spots").append("<li class='collection-item'>"+ place.name +"</li>")
            // console.log(scope.destinations);
          }

          // If the place has a geometry, present it on the map.
          if (place.geometry.viewport) {
            map.fitBounds(place.geometry.viewport);
          } else {
            map.setCenter(place.geometry.location);
            map.setZoom(17);
          }
          marker.setIcon({
            url: place.icon,
            size: new google.maps.Size(71, 71),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(17, 34),
            scaledSize: new google.maps.Size(35, 35)
          });
          marker.setPosition(place.geometry.location);
          marker.setVisible(true);

          var address = '';
          if (place.address_components) {
            address = [
              (place.address_components[0] && place.address_components[0].short_name || ''),
              (place.address_components[1] && place.address_components[1].short_name || ''),
              (place.address_components[2] && place.address_components[2].short_name || '')
            ].join(' ');
          }

          infowindow.setContent('<div><strong>' + place.name +
                                '</strong><br>' + address);
          infowindow.open(map, marker);
        });

        // Sets a listener on a radio button to change the filter type on Places
        // Autocomplete.
        function setupClickListener(id, types) {
          var radioButton = document.getElementById(id);
          radioButton.addEventListener('click', function() {
            autocomplete.setTypes(types);
          });
        }

        setupClickListener('changetype-all', []);
        setupClickListener('changetype-address', ['address']);
        setupClickListener('changetype-establishment', ['establishment']);
        setupClickListener('changetype-geocode', ['geocode']);

        scope.create = function(){
          var count = 0;
          TripFactory.save(scope.trip, function(response){
            scope.destinations.forEach(function(destination){
              DestinationFactory.save(destination, function(data){
                ItineraryFactory.save({trip_id: response.id, destination_id: data.id}, function() {
                  count  += 1
                  if (count === scope.destinations.length) {
                    response.destinations = scope.destinations;
                    TripFactory.all.push(response);
                    $state.go("tripsShow", {id: response.id});
                  }
                });
              });
            });
          });
        }

        //   scope.destinations.forEach(function(destination){
        //       console.log(destination);
        //       DestinationFactory.save({name: destination.name, address: destination.address})
        //                  .then(function(dest_response){
        //                     ItineraryFactory.save({trip_id: response.id, destination_id: dest_response.id});
        //                  });
        //   });
        // });
          //   $state.go("tripShow", {}, {reload: true});
      };
    }
})();
