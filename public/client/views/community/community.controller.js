(function () {
    "use strict";
    angular
        .module("DoMeAFavorApp")
        .controller("CommunityController", CommunityController);

    function CommunityController($scope, $location, FavorService, UserService) {

        $scope.showFavors = showFavors;
        $scope.getUsernameById = getUsernameById;
        $scope.getTagById = getTagById;
        $scope.favorDetail = favorDetail;

        $scope.tags = FavorService.getAllTags();


        function showFavors(tagId) {
            $scope.favors = FavorService.getFavorsByTagId(tagId);
        }

        function getUsernameById(userId) {
            return UserService.getUsernameById(userId);
        }

        function getTagById(tagId) {
            return FavorService.getTagById(tagId);
        }

        function favorDetail(favorId) {
            FavorService.setFavorId(favorId);
            $location.url("/community/favor");
        }

    }


})();