(function () {
    angular
        .module("DoMeAFavorApp")
        .controller("CommunityFavorController", CommunityFavorController);

    function CommunityFavorController($scope, FavorService, UserService) {

        var favorId = FavorService.getFavorId();

        $scope.getUsernameById = getUsernameById;
        $scope.getTagById = getTagById;
        $scope.joinFavor = joinFavor;
        $scope.disjoinFavor = disjoinFavor;
        $scope.agreeJoin = agreeJoin;
        $scope.rejectJoin = rejectJoin;
        $scope.rejectJoin = rejectJoin;

        $scope.favor = FavorService.getFavorById(favorId);
        $scope.users = UserService.getAllUsers();
        $scope.joinedUsers = FavorService.getJoinedUsersById(favorId);


        function getUsernameById(userId) {
            return UserService.getUsernameById(userId);
        }

        function getTagById(tagId) {
            return FavorService.getTagById(tagId);
        }

        function joinFavor(userId) {

            if(userId != $scope.favor.coordinatorId) {
                var isJoined = FavorService.isJoined(userId, favorId);
                if(!isJoined) {
                    FavorService.joinFavor(favorId, userId);
                    var newJoinedUser = {"favorId": favorId, "userId": userId, "joined": false};
                    $scope.joinedUsers.push(newJoinedUser);
                }
            }
        }

        function disjoinFavor(userId) {
            FavorService.disjoinFavor(favorId, userId);
            for(var i in $scope.joinedUsers) {
                if($scope.joinedUsers[i].favorId == favorId && $scope.joinedUsers[i].userId == userId) {
                    $scope.joinedUsers.splice(i, 1);
                    break;
                }
            }
        }

        function agreeJoin(userId) {
            FavorService.agreeJoin(favorId, userId);
            for(var i in $scope.joinedUsers) {
                if($scope.joinedUsers[i].favorId == favorId && $scope.joinedUsers[i].userId == userId) {
                    $scope.joinedUsers[i].joined = true;
                    break;
                }
            }
        }

        function rejectJoin(userId) {
            FavorService.rejectJoin(favorId, userId);
            for(var i in $scope.joinedUsers) {
                if($scope.joinedUsers[i].favorId == favorId && $scope.joinedUsers[i].userId == userId) {
                    $scope.joinedUsers.splice(i, 1);
                    break;
                }
            }
        }

    }


})();