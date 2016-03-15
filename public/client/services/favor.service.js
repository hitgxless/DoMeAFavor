(function () {
    "use strict";
    angular
        .module("DoMeAFavorApp")
        .factory("FavorService", FavorService);

    var favors = [{"_id":1111, "title":"favor_aliceC_1",  "tagId":"1", "date":"03/02/2016", "coordinatorId":111,
        "content":"Content 1. Content 1.Content 1.Content 1.Content 1.Content 1.Content 1.Content 1.Content 1.Content 1."},
        {"_id":2222, "title":"favor_aliceC_2",  "tagId":"1", "date":"03/06/2016", "coordinatorId":111,
            "content":"Content 2. Content 2.Content 2. Content 2. Content 2.Content 2. Content 2. Content 2.Content 2."},
        {"_id":3333, "title":"favor_edC_1",  "tagId":"2", "date":"02/12/2016", "coordinatorId":555,
            "content":"Content 1. Content 1.Content 1.Content 1.Content 1.Content 1.Content 1.Content 1.Content 1.Content 1."},
        {"_id":4444, "title":"favor_edC_2",  "tagId":"2", "date":"03/12/2016", "coordinatorId":555,
            "content":"Content 2. Content 2.Content 2. Content 2. Content 2.Content 2.Content 2. Content 2.Content 2."},
    ];

    var tags = [{"_id":"0", "title":"All"}, {"_id":"1", "title":"Friendly Visiting"}, {"_id":"2", "title":"Friendly Helper"},
        {"_id":"3", "title":"Medical Escort"}, {"_id":"4", "title":"PetPals"}, {"_id":"5", "title":"Music Works"}];

    var favorToVolunteer = [{"favorId":1111, "userId":222, "joined": true}, {"favorId":1111, "userId":555, "joined": true},
        {"favorId":1111, "userId":333, "joined": false}, {"favorId":1111, "userId":444, "joined": false},
        {"favorId":2222, "userId":333, "joined": true}, {"favorId":2222, "userId":444, "joined": true},
        {"favorId":3333, "userId":222, "joined": true}, {"favorId":4444, "userId":222, "joined": true}
    ];



    function FavorService($rootScope) {
        var api = {
            getFavorsByUserId: getFavorsByUserId,
            deleteFavorById: deleteFavor,
            updateFavorById: updateFavorById,
            createFavor: createFavor,

            getAllTags: getAllTags,
            getFavorsByTagId: getFavorsByTagId,
            setFavorId: setFavorId,
            getFavorId: getFavorId,

            getJoinedUsersById: getJoinedUsersById,
            isJoined: isJoined,
            joinFavor: joinFavor,
            disjoinFavor: disjoinFavor,
            agreeJoin: agreeJoin,
            rejectJoin: rejectJoin,

            getFavorById: getFavorById,
            getTagById: getTagById,

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



        function getAllTags() {
            return tags;
        }

        function getFavorsByTagId(tagId) {
            if(tagId == 0) {
                return favors;
            } else {
                var getFavors = [];
                for(var i in favors) {
                    if(favors[i].tagId == tagId) {
                        getFavors.push(favors[i]);
                    }
                }
                return getFavors;
            }

        }

        function setFavorId(favorId) {
            $rootScope.favorId = favorId;
        }

        function getFavorId() {
            return $rootScope.favorId;
        }


        function getFavorById(favorId) {
            for(var i in favors) {
                if(favors[i]._id == favorId) {
                    return favors[i];
                }
            }
        }

        function getTagById(tagId) {
            for(var i in tags) {
                if(tags[i]._id == tagId) {
                    return tags[i].title;
                }
            }
        }

        function getJoinedUsersById(favorId) {
            var joinedUsers = [];
            for(var i in favorToVolunteer) {
                if(favorToVolunteer[i].favorId == favorId) {
                    joinedUsers.push(favorToVolunteer[i]);
                }
            }
            return joinedUsers;
        }

        function isJoined(userId, favorId) {
            for(var i in favorToVolunteer) {
                if(favorToVolunteer[i].favorId == favorId && favorToVolunteer[i].userId == userId) {
                    return true;
                }
            }
            return false;
        }

        function joinFavor(favorId, userId) {
            var newJoinedUser = {"favorId": favorId, "userId": userId, "joined": false};
            favorToVolunteer.push(newJoinedUser);

        }

        function disjoinFavor(favorId, userId) {
            for(var i in favorToVolunteer) {
                if(favorToVolunteer[i].favorId == favorId && favorToVolunteer[i].userId == userId) {
                    favorToVolunteer.splice(i, 1);
                    break;
                }
            }
        }

        function agreeJoin(favorId, userId) {
            for(var i in favorToVolunteer) {
                if(favorToVolunteer[i].favorId == favorId && favorToVolunteer[i].userId == userId) {
                    favorToVolunteer[i].joined = true;
                    break;
                }
            }
        }

        function rejectJoin(favorId, userId) {
            for(var i in favorToVolunteer) {
                if(favorToVolunteer[i].favorId == favorId && favorToVolunteer[i].userId == userId) {
                    favorToVolunteer.splice(i, 1);
                    break;
                }
            }
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