(function () {
    "use strict";
    angular
        .module("DoMeAFavorApp")
        .factory("MapService", MapService);

    function MapService($http, $q) {

        var api = {
            getPosition: getPosition
        };

        return api;

        var url = "https://maps.googleapis.com/maps/api/geocode/";
        var key = "AIzaSyCX3hgR8pQ1Sq6iPwmGeAhx_T7bMMWJdZ8";

        function getPosition(addresss) {

            var deferred = $q.defer();

            $http.json(url + "json?address=" + "1600+Amphitheatre+Parkway,+Mountain+View,+CA")
                .success(function (response) {
                    deferred.resolve(response);
                });

            return deferred.promise;
        }


    }


})();