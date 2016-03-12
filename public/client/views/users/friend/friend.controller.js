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
        }

        function addFriend(friendUsername) {
            var friendId = UserService.getIdByUsername(friendUsername);
            if(friendId != null && $scope.user != null) {

                var isFriend = UserService.isFriend($scope.user._id, friendId);
                if(!isFriend) {
                    $scope.friends.push(friendUsername);
                    UserService.addFriend($scope.user._id, friendId);
                }
            }
        }

        function unFriend(index) {
            $scope.friends.splice(index, 1);
            UserService.unFriend($scope.user._id, index);

        }


    }


})();