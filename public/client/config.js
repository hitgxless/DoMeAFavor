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
                .when("/community/favors", {
                    templateUrl: "views/community/favors.view.html"
                })
                .when("/community/favor", {
                    templateUrl: "views/community/favor.view.html"
                })
                .when("/demo", {
                    templateUrl: "views/demo/demo.view.html"
                })
                .otherwise({
                    redirectTo: "/"
                });
        });
})();