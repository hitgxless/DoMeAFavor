(function () {
    "use strict";
    angular
        .module("DoMeAFavorApp")
        .controller("ProfileController", ProfileController);

    function ProfileController($scope, UserService) {

        var selected = -1;

        $scope.editUser = editUser;
        $scope.deleteUser = deleteUser;
        $scope.updateUser = updateUser;
        $scope.createUser = createUser;

        $scope.users = UserService.getAllUsers();

        function editUser(index) {
            $scope.user = angular.copy($scope.users[index]);
            selected = index;
        }

        function deleteUser(index, userId) {
            $scope.users = UserService.deleteUserById(userId);
            if(index < selected) {
                selected--;
            } else if(index == selected) {
                selected = -1;
                $scope.user = null;
            }
        }

        function updateUser() {
            if(selected != -1 && $scope.user.email != null) {
                var userId = $scope.user._id;
                $scope.users[selected] = UserService.updateUserById(userId, $scope.user);
                selected = -1;
                $scope.user = null;
            }
        }

        function createUser() {
            if(selected == -1 && $scope.user != null) {
                if($scope.user.username != null && $scope.user.password != null) {
                    var newUser = $scope.user;
                    var userId = new Date().getTime();
                    newUser._id = userId;
                    $scope.users = UserService.createUser(newUser);
                    $scope.user = null;
                }
            }


        }

    }
})();