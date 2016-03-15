(function () {
    angular
        .module("DoMeAFavorApp")
        .controller("FriendController", FriendController);

    function FriendController($scope, UserService) {

        $scope.showFriends = showFriends;
        $scope.addFriend = addFriend;
        $scope.unFriend = unFriend;

        $scope.users = UserService.getAllUsers();

        function showFriends(userId) {
            $scope.friends = UserService.getFriendsById(userId);
            $scope.friend = null;
        }


        function addFriend() {
            if($scope.user && $scope.friend) {
                var userId = $scope.user._id;
                var friendId = $scope.friend._id;
                var isFriend = UserService.isFriend(userId, friendId);

                if(userId != friendId && !isFriend) {
                    $scope.friends.push($scope.friend.username);
                    UserService.addFriend(userId, friendId);
                }
            }
        }

        function unFriend(index) {
            $scope.friends.splice(index, 1);
            UserService.unFriend($scope.user._id, index);

        }


    }


})();