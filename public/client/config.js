(function () {
    "use strict";
    angular
        .module("DoMeAFavorApp")
        .config(function ($routeProvider) {
            $routeProvider
                .when("/", {
                    templateUrl: "views/home/home.view.html"
                })
                .when("/favor", {
                    templateUrl: "views/favor/favor.view.html"
                })
                .when("/edit", {
                    templateUrl: "views/edit/edit.view.html"
                })
                .when("/profile", {
                    templateUrl: "views/profile/profile.view.html"
                })
                .when("/friend", {
                    templateUrl: "views/friend/friend.view.html"
                })
                .when("/register", {
                    templateUrl: "views/register/register.view.html"
                })
                .when("/login", {
                    templateUrl: "views/login/login.view.html"
                })
                .when("/mail", {
                    templateUrl: "views/mail/mail.view.html"
                })
                .when("/community/favors", {
                    templateUrl: "views/community/favors.view.html"
                })
                .when("/community/favor", {
                    templateUrl: "views/community/favor.view.html"
                })
                .otherwise({
                    redirectTo: "/"
                });
        });
})();