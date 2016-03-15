(function () {
    "use strict";
    angular
        .module("DoMeAFavorApp")
        .factory("CommentService", CommentService);

    var comments = [{"_id":1, "date":"03/01/2016", "favorId":1111, "hostId":111, "commenterId":222, "comment":"comment. comment. comment. ",
        "replies":[{"replierId":333, "hostId":222, "date":"03/01/2016", "reply":"Reply. Reply. Reply."},
            {"replierId":222, "hostId":333, "date":"03/02/2016", "reply":"Reply. Reply. Reply."},
            {"replierId":333, "hostId":222, "date":"03/03/2016", "reply":"Reply. Reply. Reply."}
        ]},

        {"_id":2, "date":"03/02/2016", "favorId":1111, "hostId":111, "commenterId":333, "comment":"comment. comment. comment. ",
            "replies":[{"replierId":222, "hostId":333, "date":"03/12/2016", "reply":"Reply. Reply. Reply."}]},

        {"_id":3, "date":"03/08/2016", "favorId":2222, "hostId":111, "commenterId":444, "comment":"comment. comment. comment. ",
            "replies":[{"replierId":333, "hostId":444, "date":"03/14/2016", "reply":"Reply. Reply. Reply."},
                {"replierId":222, "hostId":444, "date":"03/15/2016", "reply":"Reply. Reply. Reply."}
            ]},

        {"_id":4, "date":"03/10/2016", "favorId":3333, "hostId":555, "commenterId":222, "comment":"comment. comment. comment. ",
            "replies":[{"replierId":333, "hostId":222, "date":"03/26/2016", "reply":"Reply. Reply. Reply."},
                {"replierId":222, "hostId":333, "date":"03/26/2016", "reply":"Reply. Reply. Reply."},
                {"replierId":333, "hostId":222, "date":"03/26/2016", "reply":"Reply. Reply. Reply."}
            ]},
        {"_id":5, "date":"03/12/2016", "favorId":1111, "hostId":222, "commenterId":444, "comment":"comment. comment. comment. ",
            "replies":[{"replierId":333, "hostId":444, "date":"03/12/2016", "reply":"Reply. Reply. Reply."},
                {"replierId":222, "hostId":444, "date":"03/12/2016", "reply":"Reply. Reply. Reply."},
                {"replierId":333, "hostId":222, "date":"03/12/2016", "reply":"Reply. Reply. Reply."}
            ]}
    ];


    function CommentService() {
        var api = {
            getCommentByIds: getCommentByIds,
            createCommentByIds: createCommentByIds,
            createReplyByIds: createReplyByIds
        };

        return api;

        function createReplyByIds(commentId, newReply) {
            for(var i in comments) {
                if(comments[i]._id == commentId) {
                    comments[i].replies.push(newReply);
                    break;
                }
            }
        }

        function getCommentByIds(favorId, hostId) {
            var getComments = [];
            for(var i in comments) {
                if(comments[i].favorId == favorId && comments[i].hostId == hostId) {
                    getComments.push(comments[i]);
                }
            }
            return getComments.reverse();
        }

        function createCommentByIds(newComment) {
            comments.push(newComment);
        }


    }

})();