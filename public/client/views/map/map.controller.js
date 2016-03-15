(function () {
    angular
        .module("DoMeAFavorApp")
        .controller("MapController", MapController);

    function MapController($scope, $http, MapService) {

        $scope.getP = getP;
        $scope.mapDetial = mapDetial;

        function getP(address) {

            $http.get("http://maps.googleapis.com/maps/api/geocode/json?address=" + address)
                .then(function (response) {
                    var res = response;
                    $scope.results = res.data.results;
                });
        }

        function mapDetial(result) {
            var address = {};
            for(var i in result.address_components) {

                if(result.address_components[i].types[0] == "administrative_area_level_1") {
                    address.state = result.address_components[i].long_name;
                }
                else if(result.address_components[i].types[0] == "administrative_area_level_2") {
                    address.county = result.address_components[i].long_name;
                }
                else if(result.address_components[i].types[0] == "locality") {
                    address.name = result.address_components[i].long_name;
                }
                else if(result.address_components[i].types[0] == "country") {
                    address.country = result.address_components[i].long_name;
                }

            }
            $scope.detail = address;
            $scope.place = result;
        }


        /*
         function initMap() {

         var initCenter = {lat: 42.348, lng: -71.064};

         var map = new google.maps.Map(document.getElementById("googleMap"), {
         center: initCenter,
         zoom: 13
         });


         var marker = new google.maps.Marker({
         map: map,
         position: initCenter,
         title: "hello"
         });

         var infowindow = new google.maps.InfoWindow({
         content: "<a href='#/friend'>Hello World</a>"
         });

         marker.addListener("click", function () {
         infowindow.open(map, marker);
         });


         var positions = [{lat: 42.348, lng: -71.064},
         {lat: 42.368, lng: -71.064}];

         var m = [];
         var info = [];

         for (var i in positions) {

         m[i] = new google.maps.Marker({
         map: map,
         position: positions[i]
         });

         info[i] = new google.maps.InfoWindow({
         content: "h" + i
         });


         }

         m[0].addListener("click", function () {
         info[0].open(map, m[0]);
         });
         m[1].addListener("click", function () {
         info[1].open(map, m[1]);
         });

         //var address = "6 Juniper Street, Brookline, MA";


         MapService.getPosition(address)
         .then(function (response) {
         console.log(response);
         });
         }

         var geocoder = new google.maps.Geocoder();

         geocoder.geocode( { 'address': address}, function(results, status) {
         if (status == google.maps.GeocoderStatus.OK) {

         map.setCenter(results[0].geometry.location);

         var marker = new google.maps.Marker({
         map: map,
         position: results[0].geometry.location
         });

         } else {
         alert("Geocode was not successful for the following reason: " + status);
         }
         });

         */
    }

})();