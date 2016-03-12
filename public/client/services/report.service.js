(function () {
    "use strict";
    angular
        .module("DoMeAFavorApp")
        .factory("UserService", UserService);

    var reports = [{"_id":11, "date":"03/12/2016", "favorId":1111, "userId":222,
        "content":"Report. Report. Report. Report. Report. Report. Report. Report. Report. Report. Report. Report. Report."},
        {"_id":22, "date":"03/13/2016", "favorId":1111, "userId":222,
            "content":"Report. Report. Report. Report. Report. Report. Report. Report. Report. Report. Report. Report. Report."},
        {"_id":33, "date":"03/13/2016", "favorId":1111, "userId":333,
            "content":"Report. Report. Report. Report. Report. Report. Report. Report. Report. Report. Report. Report. Report."},
        {"_id":44, "date":"03/13/2016", "favorId":2222, "userId":333,
            "content":"Report. Report. Report. Report. Report. Report. Report. Report. Report. Report. Report. Report. Report."},
        {"_id":55, "date":"03/14/2016", "favorId":3333, "userId":222,
            "content":"Report. Report. Report. Report. Report. Report. Report. Report. Report. Report. Report. Report. Report."},
        {"_id":66, "date":"03/15/2016", "favorId":2222, "userId":444,
            "content":"Report. Report. Report. Report. Report. Report. Report. Report. Report. Report. Report. Report. Report."}
    ];

    var favorToVolunteer = [{"favorId":1111, "userId":111}, {"favorId":1111, "userId":222},
        {"favorId":1111, "userId":333}, {"favorId":1111, "userId":444},
        {"favorId":2222, "userId":111}, {"favorId":2222, "userId":333}, {"favorId":2222, "userId":444},
        {"favorId":3333, "userId":555}, {"favorId":3333, "userId":222},
        {"favorId":4444, "userId":555}

    ];



    function UserService() {
        var api = {

        };
    }

})();