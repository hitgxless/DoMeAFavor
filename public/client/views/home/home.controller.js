(function () {
    "use strict";
    angular
        .module("DoMeAFavorApp")
        .controller("HomeController", HomeController);

    function HomeController($scope, FavorService, UserService) {

        $scope.newPost = false;
        $scope.showNewPost = showNewPost;
        $scope.notShowNewPost = notShowNewPost;

        function showNewPost() {
            $scope.newPost = true;
        }

        function notShowNewPost() {
            $scope.newPost = false;
        }

        //demo code

        var selected = -1;

        $scope.showFavors = showFavors;
        $scope.deleteFavor = deleteFavor;
        $scope.editFavor = editFavor;
        $scope.updateFavor = updateFavor;
        $scope.createFavor = createFavor;

        $scope.coordinators = UserService.getAllCoordinators();

        function showFavors(userId) {
            $scope.favors = FavorService.getFavorsByUserId(userId);
        }

        function deleteFavor(reverseIndex, favorId) {
            var length = $scope.favors.length;
            var index = length - reverseIndex - 1;
            $scope.favors.splice(index, 1);
            FavorService.deleteFavorById(favorId);
            if(reverseIndex < selected) {
                selected--;
            } else if(reverseIndex == selected) {
                selected = -1;
                $scope.favor = null;
            }
        }

        function editFavor(reverseIndex) {
            selected = reverseIndex;
            var index = $scope.favors.length - reverseIndex - 1;
            $scope.favor = angular.copy($scope.favors[index]);
        }

        function updateFavor(favor) {

            if(selected != -1) {
                if(favor.title && favor.content) {
                    var index = $scope.favors.length - selected - 1;
                    $scope.favors[index] = favor;
                    FavorService.updateFavorById(favor);
                    $scope.favor = null;
                    selected = -1;

                }
            }

        }

        function createFavor(favor) {
            if(selected == -1 && $scope.coordinator && $scope.favor) {
                if($scope.favor.title && $scope.favor.content && $scope.favor.tag) {
                    var userId = $scope.coordinator._id;

                    favor = {
                        title: $scope.favor.title,
                        content: $scope.favor.content,
                        tag: $scope.favor.tag,
                        coordinatorId: userId,
                        date: FavorService.getTodayDate()
                    };
                    var favor = FavorService.createFavor(favor);
                    $scope.favors.push(favor);
                    $scope.favor = null;
                    selected = -1;
                }

            }
        }



    }

})();
