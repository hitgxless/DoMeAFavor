(function () {
    "use strict";
    angular
        .module("DoMeAFavorApp")
        .factory("FavorService", FavorService);

    var favors = [{"_id":1111, "title":"favor_aliceC_1",  "tag":"1", "date":"03/02/2016", "coordinatorId":111,
        "content":"Content 1. Content 1.Content 1.Content 1.Content 1.Content 1.Content 1.Content 1.Content 1.Content 1."},
        {"_id":2222, "title":"favor_aliceC_2",  "tag":"1", "date":"03/06/2016", "coordinatorId":111,
            "content":"Content 2. Content 2.Content 2. Content 2. Content 2.Content 2. Content 2. Content 2.Content 2."},
        {"_id":3333, "title":"favor_edC_1",  "tag":"2", "date":"02/12/2016", "coordinatorId":555,
            "content":"Content 1. Content 1.Content 1.Content 1.Content 1.Content 1.Content 1.Content 1.Content 1.Content 1."},
        {"_id":4444, "title":"favor_edC_2",  "tag":"2", "date":"03/12/2016", "coordinatorId":555,
            "content":"Content 2. Content 2.Content 2. Content 2. Content 2.Content 2.Content 2. Content 2.Content 2."},
    ];

    var favorToVolunteer = [{"favorId":1111, "userId":111}, {"favorId":1111, "userId":222},
        {"favorId":1111, "userId":333}, {"favorId":1111, "userId":444},
        {"favorId":2222, "userId":111}, {"favorId":2222, "userId":333}, {"favorId":2222, "userId":444},
        {"favorId":3333, "userId":555}, {"favorId":3333, "userId":222},
        {"favorId":4444, "userId":555}

    ];



    function FavorService() {
        var api = {
            getFavorsByUserId: getFavorsByUserId,
            deleteFavorById: deleteFavor,
            updateFavorById: updateFavorById,
            createFavor: createFavor,
            getTodayDate: getTodayDate

        };

        return api;


        function getFavorsByUserId(userId) {
            var getFavors = [];
            for(var i in favors) {
                if(favors[i].coordinatorId == userId) {
                    getFavors.push(favors[i]);
                }
            }
            return getFavors;
        }

        function deleteFavor(favorId) {
            for(var i in favors) {
                if(favors[i]._id == favorId) {
                    favors.splice(i, 1);
                    break;
                }
            }
        }

        function updateFavorById(favor) {
            for(var i in favors) {
                if(favors[i]._id == favor._id) {
                    favors[i] = favor;
                    break;
                }
            }
        }

        function createFavor(favor) {
            favor._id = new Date().getTime();
            favors.push(favor);
            return favor;
        }

        function getTodayDate() {
            var today = new Date();
            var date = today.getDate();
            var month = today.getMonth()+1;
            var year = today.getFullYear();

            if(date < 10){
                date = "0" + date;
            }
            if(month < 10){
                month = "0" + month;
            }
            var today = month + "/" + date + "/" + year;
            return today;
        }

    }

})();