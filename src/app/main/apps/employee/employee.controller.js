(function() {
    'use strict';

    angular
        .module('app.employee')
        .controller('EmployeeController', EmployeeController);

    /** @ngInject */
    function EmployeeController($scope) {
        $scope.colors = ['blue-bg', 'blue-grey-bg', 'orange-bg', 'pink-bg', 'purple-bg'];
        $scope.positions = [];
        $scope._positionSelected = "";
        $scope._selectedemp = {};

        $scope.positionSelected = function(position) {
            $scope._positionSelected = position;
        }

        $scope.getEmployeeList = function() {
            $scope._getEmployeeList = [{
                "_id": "57db700ae81c7001da81d05a",
                "__v": 0,
                "Updated": "2016-09-16T06:10:30.384Z",
                "Created": "2016-09-16T04:07:38.217Z",
                "SilpInfo": [],
                "DeductionInfo": [],
                "IncreaseInfo": [{
                    "EndDateIn": "2016-09-16T17:00:00.000Z",
                    "StartDateIn": "2016-09-07T17:00:00.000Z",
                    "AmountIn": 23456,
                    "DetailIn": "vv",
                    "_id": "57db700ae81c7001da81d05a"
                }, {
                    "EndDateIn": "2016-09-10T17:00:00.000Z",
                    "StartDateIn": "2016-09-09T17:00:00.000Z",
                    "AmountIn": 45,
                    "DetailIn": "rrr",
                    "_id": "57db700ae81c7001da81d05a"
                }],
                "EvaluationInfo": {
                    "DateConfirmedEV": "2016-09-02T17:00:00.000Z",
                    "SumP5EV": 0,
                    "SumP4EV": 0,
                    "SumP3EV": 0,
                    "SumP2EV": 0,
                    "SumP1EV": 0,
                    "TotalScoreEV": null,
                    "PercentEV": null
                },
                "RegardInfo": {
                    "StartDateRI": "2016-09-02T17:00:00.000Z",
                    "BenefitsInfo": []
                },
                "LanguageInfo": [],
                "WorkExperienceInfo": [],
                "EducationInfo": [],
                "FamilyInfo": [],
                "PersonalInfo": {
                    "Age": 60,
                    "Sex": "Male",
                    "Position": "Developer",
                    "Email": "toonelicious@gmail.com",
                    "Nationality": "ไทย",
                    "LastNameEN": "จงกลางธวัชกิจ",
                    "FirstNameEN": "จักรกฤช822"
                }
            }, {
                "_id": "57db70c1e81c7001da81d05b",
                "__v": 0,
                "Created": "2016-09-16T04:10:41.688Z",
                "SilpInfo": [],
                "DeductionInfo": [],
                "IncreaseInfo": [],
                "RegardInfo": {
                    "BenefitsInfo": []
                },
                "LanguageInfo": [],
                "WorkExperienceInfo": [],
                "EducationInfo": [],
                "FamilyInfo": [],
                "PersonalInfo": {
                    "FirstNameEN": "จักรกฤช6",
                    "LastNameEN": "จงกลางธวัชกิจ",
                    "Nationality": "ไทย",
                    "Email": "toonelicious@gmail.com"
                }
            }, {
                "_id": "57db8969e81c7001da81d05c",
                "__v": 0,
                "Created": "2016-09-16T05:55:53.509Z",
                "SilpInfo": [],
                "DeductionInfo": [],
                "IncreaseInfo": [],
                "RegardInfo": {
                    "BenefitsInfo": []
                },
                "LanguageInfo": [],
                "WorkExperienceInfo": [],
                "EducationInfo": [],
                "FamilyInfo": [],
                "PersonalInfo": {
                    "FirstNameEN": "mm",
                    "LastNameEN": "nn"
                }
            }, {
                "_id": "57db8a34e81c7001da81d05d",
                "__v": 0,
                "Created": "2016-09-16T05:59:16.043Z",
                "SilpInfo": [],
                "DeductionInfo": [],
                "IncreaseInfo": [],
                "RegardInfo": {
                    "BenefitsInfo": []
                },
                "LanguageInfo": [],
                "WorkExperienceInfo": [],
                "EducationInfo": [],
                "FamilyInfo": [],
                "PersonalInfo": {
                    "FirstNameEN": "hh",
                    "LastNameEN": "hh",
                    "Position": "Developer"
                }
            }];

            $scope._getEmployeeList.forEach(function(entry) {
                var isNew = $scope.positions.indexOf(entry.PersonalInfo.Position) == -1;
                console.log(isNew);
                if (isNew) {
                    $scope.positions.push(entry.PersonalInfo.Position);
                }
            });

            $scope.selectedemp = function(emp) {
                console.log(emp);
                $scope._selectedemp = emp;
            }


        }

        $scope.getEmployeeList();
    }
})();
