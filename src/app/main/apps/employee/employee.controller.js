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

        $scope.positionSelected = function(position) {
            $scope._positionSelected = position;
        }

        $scope.getEmployeeList = function() {
            $scope._getEmployeeList = [{
                "_id":"1",
                "fname":"Dook",
                "lname":"Apple",
                "position":"SystemAnalyst"
            },
            {
                "_id":"2",
                "fname":"Dook",
                "lname":"Apple",
                "position":"Developer"
            },
            {
                "_id":"3",
                "fname":"Dook",
                "lname":"Apple",
                "position":"Developer"
            }];

            $scope._getEmployeeList.forEach(function(entry){
                console.log(entry.position);
                var isNew = $scope.positions.indexOf(entry.position) == -1;
                console.log(isNew);
                if(isNew){
                    $scope.positions.push(entry.position);
                }
            });


        }

        $scope.getEmployeeList();
    }
})();
