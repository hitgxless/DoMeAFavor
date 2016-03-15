(function () {
    "use strict";
    angular
        .module("DoMeAFavorApp")
        .config(function ($routeProvider) {
            $routeProvider
                .when("/", {
                    templateUrl: "views/home/home.view.html",
                    controller: "HomeController"
                })
                .when("/favor", {
                    templateUrl: "views/home/favor.view.html",
                    controller: "FavorController"
                })
                .when("/profile", {
                    templateUrl: "views/users/profile/profile.view.html",
                    controller: "ProfileController"
                })
                .when("/friend", {
                    templateUrl: "views/users/friend/friend.view.html",
                    controller: "FriendController"
                })
                .when("/register", {
                    templateUrl: "views/users/register/register.view.html"
                })
                .when("/login", {
                    templateUrl: "views/users/login/login.view.html"
                })
                .when("/mail", {
                    templateUrl: "views/users/mail/mail.view.html"
                })
                .when("/community", {
                    templateUrl: "views/community/community.view.html",
                    controller: "CommunityController"
                })
                .when("/community/favor", {
                    templateUrl: "views/community/favor.view.html",
                    controller: "CommunityFavorController"
                })
                .when("/demo", {
                    templateUrl: "views/demo/demo.view.html"
                })
                .when("/map", {
                    templateUrl: "views/map/map.view.html",
                    controller: "MapController"
                })
                .otherwise({
                    redirectTo: "/"
                });
        });
})();