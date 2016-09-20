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
            }, {
                "_id": "57e0d392c0db1f03f4e6444c",
                "__v": 0,
                "Created": "2016-09-20T06:13:38.943Z",
                "SilpInfo": [],
                "DeductionInfo": [],
                "IncreaseInfo": [],
                "RegardInfo": {
                    "BenefitsInfo": []
                },
                "OtherInfo": {
                    "WorkCountryOI": "true",
                    "FirtNameOI": "จักรกฤช",
                    "LastNameOI": "จงกลางธวัชกิจ",
                    "AddressOI": "51/356",
                    "TelOI": "66906849242",
                    "ContagiousFlagOI": "true",
                    "FirtNameWorkRelativeOI": "จักรกฤช",
                    "LastNameWorkRelativeOI": "จงกลางธวัชกิจ",
                    "IntroduceYoureSelfOI": "-"
                },
                "SpecialInfo": {
                    "TypingSI": true,
                    "TypingTHSI": 33,
                    "TypingENSI": 33,
                    "ComputerSI": true,
                    "ComputerDescSI": "Com",
                    "DrivingSI": false,
                    "OfficeMachineSI": "Computer",
                    "HobbiceSI": "Internet",
                    "SportSI": "Motocycle",
                    "KnowledgeSI": "-",
                    "OtherSI": "-"
                },
                "LanguageInfo": [{
                    "LanguageTypeLI": "English",
                    "SpeakingLI": "Good",
                    "WritingLI": "Fair",
                    "ReadingLI": "Poor",
                    "_id": "57e0d392c0db1f03f4e6444d"
                }],
                "WorkExperienceInfo": [{
                    "CompanyWI": "C@NET",
                    "DateFromWI": "2016-09-07T17:00:00.000Z",
                    "DateToWI": "2016-09-16T17:00:00.000Z",
                    "PositionWI": "Developer",
                    "SalaryWI": 10000,
                    "ReasonWI": "-",
                    "JobDescWI": "-",
                    "_id": "57e0d392c0db1f03f4e6444e"
                }],
                "EducationInfo": [{
                    "EducationLevelEI": "Grade 4-6",
                    "InstitutionEI": "-",
                    "MajorEI": "Art Math",
                    "DateFromEI": "2016-09-15T17:00:00.000Z",
                    "DateToEI": "2016-09-07T17:00:00.000Z",
                    "_id": "57e0d392c0db1f03f4e6444f"
                }],
                "FamilyInfo": [{
                    "FirstNameFI": "จักรกฤช",
                    "LastnameFI": "จงกลางธวัชกิจ",
                    "AgeFI": 22,
                    "SexFI": "Male",
                    "OccupationFI": "",
                    "WorkPlaceFI": "",
                    "RelatedFI": "",
                    "TelFI": "66906849242",
                    "_id": "57e0d392c0db1f03f4e64450"
                }],
                "PersonalInfo": {
                    "FirstNameEN": "จักรกฤช",
                    "LastNameEN": "จงกลางธวัชกิจ",
                    "Nationality": "ไทย",
                    "Email": "toonelicious@gmail.com",
                    "Position": "Developer",
                    "Salary": 10000,
                    "Birthdate": "2016-09-16T17:00:00.000Z",
                    "Age": 33,
                    "Sex": "Male",
                    "IDCard": "1100210255455",
                    "IDCardExp": "2016-09-15T17:00:00.000Z",
                    "Account": "154454587784",
                    "Religion": "ไทย",
                    "Race": "พุทธ",
                    "PresentAddress": "51/356",
                    "Postcode": "12150",
                    "Tel": "66906849242",
                    "Moblie": "66906849242",
                    "Moo": 9,
                    "Height": 166,
                    "Weight": 66,
                    "UnderlyingDisease": "-",
                    "Living": "Own home",
                    "Military": "Exempted",
                    "Marital": "Single"
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
