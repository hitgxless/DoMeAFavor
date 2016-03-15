(function () {
    "use strict";
    angular
        .module("DoMeAFavorApp")
        .factory("ReportService", ReportService);

    var reports = [{"_id":11, "date":"02/12/2016", "favorId":1111, "userId":222,
        "content":"Report. Report. Report. Report. Report. Report. Report. Report. Report. Report. Report. Report. Report."},
        {"_id":22, "date":"02/20/2016", "favorId":1111, "userId":222,
            "content":"Report. Report. Report. Report. Report. Report. Report. Report. Report. Report. Report. Report. Report."},
        {"_id":33, "date":"02/21/2016", "favorId":1111, "userId":333,
            "content":"Report. Report. Report. Report. Report. Report. Report. Report. Report. Report. Report. Report. Report."},
        {"_id":44, "date":"02/22/2016", "favorId":2222, "userId":333,
            "content":"Report. Report. Report. Report. Report. Report. Report. Report. Report. Report. Report. Report. Report."},
        {"_id":55, "date":"02/22/2016", "favorId":3333, "userId":222,
            "content":"Report. Report. Report. Report. Report. Report. Report. Report. Report. Report. Report. Report. Report."},
        {"_id":66, "date":"03/04/2016", "favorId":2222, "userId":444,
            "content":"Report. Report. Report. Report. Report. Report. Report. Report. Report. Report. Report. Report. Report."},
        {"_id":77, "date":"03/12/2016", "favorId":1111, "userId":222,
            "content":"Report. Report. Report. Report. Report. Report. Report. Report. Report. Report. Report. Report. Report."},
    ];




    function ReportService() {
        var api = {
            getReportByIds: getReportByIds,
            updateReportById: updateReportById,
            deleteReportById: deleteReportById,
            createReport: createReport

        };

        return api;

        function getReportByIds(favorId, userId) {
            var getReports = [];
            for(var i in reports) {
                if(reports[i].userId == userId && reports[i].favorId == favorId) {
                    getReports.push(reports[i]);
                }
            }
            return getReports.reverse();
        }

        function updateReportById(report) {
            for(var i in reports) {
                if(reports[i]._id == report._id) {
                    reports[i] = report;
                    break;
                }
            }
        }

        function deleteReportById(reportId) {
            for(var i in reports) {
                if(reports[i]._id == reportId) {
                    reports.splice(i, 1);
                    break;
                }
            }
        }

        function createReport(report) {
            reports.push(report);
        }

    }

})();