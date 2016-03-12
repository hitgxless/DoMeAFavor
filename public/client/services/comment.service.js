(function () {
    "use strict";
    angular
        .module("DoMeAFavorApp")
        .factory("UserService", UserService);

    var comments = [{"_id":1, "date":"03/12/2016", "favorId":1111, "hostId":111, "commenterId":222, "comment":"REPLY. REPLY. REPLY",
        "replies":[{"callerId":333, "calleeId":222, "date":"03/12/2016", "reply":"Reply. Reply. Reply."},
            {"callerId":222, "calleeId":333, "date":"03/12/2016", "reply":"Reply. Reply. Reply."},
            {"callerId":333, "calleeId":222, "date":"03/12/2016", "reply":"Reply. Reply. Reply."}
        ]},

        {"_id":2, "date":"03/12/2016", "favorId":1111, "hostId":111, "commenterId":333, "comment":"REPLY. REPLY. REPLY",
            "replies":[{"callerId":222, "calleeId":333, "date":"03/12/2016", "reply":"Reply. Reply. Reply."}]},

        {"_id":3, "date":"03/14/2016", "favorId":2222, "hostId":111, "commenterId":444, "comment":"REPLY. REPLY. REPLY",
            "replies":[{"callerId":333, "calleeId":444, "date":"03/14/2016", "reply":"Reply. Reply. Reply."},
                {"callerId":222, "calleeId":444, "date":"03/15/2016", "reply":"Reply. Reply. Reply."}
            ]},

        {"_id":4, "date":"03/26/2016", "favorId":3333, "hostId":555, "commenterId":222, "comment":"REPLY. REPLY. REPLY",
            "replies":[{"callerId":333, "calleeId":222, "date":"03/26/2016", "reply":"Reply. Reply. Reply."},
                {"callerId":222, "calleeId":333, "date":"03/26/2016", "reply":"Reply. Reply. Reply."},
                {"callerId":333, "calleeId":222, "date":"03/26/2016", "reply":"Reply. Reply. Reply."}
            ]},
        {"_id":5, "date":"03/12/2016", "favorId":1111, "hostId":222, "commenterId":444, "comment":"REPLY. REPLY. REPLY",
            "replies":[{"callerId":333, "calleeId":444, "date":"03/12/2016", "reply":"Reply. Reply. Reply."},
                {"callerId":222, "calleeId":444, "date":"03/12/2016", "reply":"Reply. Reply. Reply."},
                {"callerId":333, "calleeId":222, "date":"03/12/2016", "reply":"Reply. Reply. Reply."}
            ]}
    ];


    function UserService() {
        var api = {

        };
    }

})();