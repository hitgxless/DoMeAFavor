(function () {
    "use strict";
    angular
       .module("DoMeAFavorApp")
       .controller("FavorController", FavorController);

    function FavorController($scope, UserService, ReportService, FavorService, CommentService) {

        var favorId = 1111;
        var selected = null;
        var hostId = 111;
        var selectedCommentId = null;

        //comment section
        $scope.makeComment = makeComment;
        $scope.requestReply = requestReply;
        $scope.makeReply = makeReply;

        $scope.comments = CommentService.getCommentByIds(favorId, hostId);

        function requestReply(commentId, replierId) {
            selectedCommentId = commentId;
            $scope.reply = {
                "hostId": replierId
            };
        }

        function makeReply(reply) {
            if(reply && $scope.replier) {
                if(reply.reply && reply.hostId) {
                    var newReply = {
                        "replierId": $scope.replier._id,
                        "hostId": reply.hostId,
                        "date": FavorService.getTodayDate(),
                        "reply": reply.reply
                    };

                    CommentService.createReplyByIds(selectedCommentId, newReply);
                    $scope.replier = null;
                    $scope.reply = null;
                }
            }

        }

        function makeComment(comment) {
            if($scope.commenter && comment) {
                var newComment = {
                    "_id": new Date().getTime(),
                    "date": FavorService.getTodayDate(),
                    "favorId": favorId,
                    "hostId": hostId,
                    "commenterId": $scope.commenter._id,
                    "comment": comment.reply,
                    "replies":[]
                };
                $scope.comments.unshift(newComment);
                CommentService.createCommentByIds(newComment);
                $scope.comment = null;
                $scope.commenter = null;
            }
        }




        //report section
        $scope.showReports = showReports;
        $scope.editReport = editReport;
        $scope.updateReport = updateReport;
        $scope.deleteReport = deleteReport;
        $scope.createReport = createReport;

        $scope.users = UserService.getAllUsers();

        function showReports(userId) {
            $scope.reports = ReportService.getReportByIds(favorId, userId);
        }

        function editReport(index) {
            selected = index;
            $scope.report = angular.copy($scope.reports[index]);
        }

        function updateReport(report) {

            if(selected != null && report.content) {
                ReportService.updateReportById(report);
                $scope.reports[selected] = report;
                selected = null;
                $scope.report = null;
            }

        }

        function deleteReport(index, reportId) {
            ReportService.deleteReportById(reportId);
            $scope.reports.splice(index, 1);
            if(index < selected) {
                selected--;
            } else if(index == selected) {
                selected = null;
                $scope.report = null;
            }
        }

        function createReport(report) {
            if(report && selected == null) {
                if(report.content && report.date) {
                    var report = {
                        "_id": new Date().getTime(),
                        "date": FavorService.getTodayDate(),
                        "favorId": favorId,
                        "userId": $scope.user._id,
                        "content": report.content
                    };
                    ReportService.createReport(report);
                    $scope.reports.unshift(report);
                    $scope.report = null;
                    selected = null;
                }

            }


        }





        // code before demo
        $scope.newPost = false;
        $scope.edit = false;
        $scope.join = true;
        $scope.showNewPost = showNewPost;
        $scope.notShowNewPost = notShowNewPost;
        $scope.showEdit = showEdit;
        $scope.notShowEdit = notShowEdit;
        $scope.disjoin = disjoin;

        function showNewPost() {
            var today = new Date();
            var dateOri = today.toDateString();
            var date = dateOri.substring(4, 8) + today.getDay() + "," + dateOri.substring(10);

            $scope.newPost = true;
            $scope.newPostDate = date;
        }

        function notShowNewPost() {
            $scope.newPost = false;
        }


        function showEdit() {
            $scope.edit = true;
        }

        function notShowEdit() {
            $scope.edit = false;
        }

        function disjoin() {
            $scope.join = false;
        }

        var title = "Feb 1, 2016";
        var content = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum " +
        "has been the industry's standard dummy text ever since the 1500s, when an unknown " +
        "printer took a galley of type and scrambled it to make a type specimen book. It has " +
        "survived not only five centuries, but also the leap into electronic typesetting, " +
        "remaining essentially unchanged. It was popularised in the 1960s with the release " +
        "of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop " +
        "publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

        $scope.content1 = content;
        $scope.title1 = title;



    }

})();