(function () {
    "use strict";
    angular
        .module("DoMeAFavorApp")
        .factory("UserService", UserService);

    var users = [
        {	"_id":111, "firstName":"Alice",            "lastName":"Wonderland",
            "username":"aliceC",  "password":"alice",   "dob":"03/09/1990",
            "city":"Boston", "phone":"1111231234", "email":"alice@alice.cn", "volunteer":false},
        {	"_id":222, "firstName":"Bob",              "lastName":"Hope",
            "username":"bobV",    "password":"bob",      "dob":"11/19/1996",
            "city":"Brookline", "phone":"2221231234", "email":"bob@bob.edu", "volunteer":true},
        {	"_id":333, "firstName":"Charlie",          "lastName":"Brown",
            "username":"charlieV","password":"charlie", "dob":"05/04/1993",
            "city":"Boston", "phone":"3331231234", "email":"charlie@charlie.com", "volunteer":true},
        {	"_id":444, "firstName":"Dan",              "lastName":"Craig",
            "username":"danV",    "password":"dan",      "dob":"06/05/1980",
            "city":"Seattle", "phone":"4441231234",  "email":"dan@dan.com", "volunteer":true},
        {	"_id":555, "firstName":"Edward",           "lastName":"Norton",
            "username":"edC",     "password":"ed",      "dob":"12/09/1988",
            "city":"New York", "phone":"5551231234",    "email":"ed@ed.com", "volunteer":false}
    ];

    var userToUser = [{"userId":111, "friend":[222, 333, 444]},
        {"userId":222, "friend":[111, 444, 555]},
        {"userId":333, "friend":[111, 444]},
        {"userId":444, "friend":[111, 222, 333]},
        {"userId":555, "friend":[222]}
    ];


    function UserService() {
        var api = {
            getAllUsers: getAllUsers,
            getAllCoordinators: getAllCoordinators,
            deleteUserById: deleteUserById,
            updateUserById: updateUserById,
            createUser: createUser,
            getIdByUsername: getIdByUsername,
            getUsernameById: getUsernameById,
            getFriendsById: getFriendsById,
            addFriend: addFriend,
            isFriend: isFriend,
            unFriend: unFriend

        };

        return api;

        function getAllUsers() {
            return users;
        }

        function getAllCoordinators() {
            var coordinators = [];
            for(var i in users) {
                if(users[i].volunteer == false) {
                    var coordinator = {
                        _id: users[i]._id,
                        username: users[i].username
                    };
                    coordinators.push(coordinator);
                }
            }
            return coordinators;
        }

        function deleteUserById(userId) {
            for(var i in users) {
                if(users[i]._id == userId) {
                    users.splice(i, 1);
                    return users;

                }
            }
        }

        function updateUserById(userId, user) {
            for(var i in users) {
                if(users[i]._id == userId) {
                    users[i] = user;
                    return users[i];
                }
            }
        }

        function createUser(user) {
            users.push(user);
            return users;
        }

        function getFriendsById(userId) {
            var friends = [];
            for(var i in userToUser) {
                if(userId == userToUser[i].userId) {
                    friends = userToUser[i].friend;
                    break;
                }
            }

            var friendName = [];
            for(var i in friends) {
                friendName.push(getUsernameById(friends[i]));
            }
            return friendName;

        }

        function getUsernameById(userId) {
            for(var i in users) {
                if(userId == users[i]._id) {
                    return users[i].username;
                }
            }
        }

        function getIdByUsername(username) {
            for(var i in users) {
                if(username == users[i].username) {
                    return users[i]._id;
                }
            }
            return null;
        }

        function addFriend(userId, friendId) {

            for(var i in userToUser) {
                if(userToUser[i].userId == userId) {
                    userToUser[i].friend.push(friendId);
                    break;
                }
            }

            for(var i in userToUser) {
                if(userToUser[i].userId == friendId) {
                    userToUser[i].friend.push(userId);
                    break;
                }
            }
        }

        function isFriend(userId, friendId) {
            for(var i in userToUser) {
                if(userToUser[i].userId == userId) {
                    for(var j in userToUser[i].friend) {
                        if(userToUser[i].friend[j] == friendId) {
                            return true;
                        }
                    }
                    break;
                }
            }
            return false;
        }

        function unFriend(userId, friendIndex) {
            var friendId = null;
            for(var i in userToUser) {
                if(userToUser[i].userId == userId) {
                    friendId = userToUser[i].friend[friendIndex];
                    userToUser[i].friend.splice(friendIndex, 1);
                    break;
                }
            }

            for(var i in userToUser) {
                if(userToUser[i].userId == friendId) {
                    for(var j in userToUser[i].friend) {
                        if(userToUser[i].friend[j] == userId) {
                            userToUser[i].friend.splice(j, 1);
                            break;
                        }
                    }
                    break;
                }
            }

        }

    }

})();