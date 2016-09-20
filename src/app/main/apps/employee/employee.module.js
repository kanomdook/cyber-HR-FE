(function ()
{
    'use strict';

    angular
        .module('app.employee', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider, $translatePartialLoaderProvider, msApiProvider, msNavigationServiceProvider)
    {
        // State
        $stateProvider.state('app.employee', {
            url      : '/employee',
            views    : {
                'content@app': {
                    templateUrl: 'app/main/apps/employee/employee.html',
                    controller : 'EmployeeController'
                }
            }
        });
        // Navigation
        msNavigationServiceProvider.saveItem('apps.employee', {
            title : 'Employee',
            icon  : 'icon-email',
            state : 'app.employee',
            weight: 3
        });
    }
})();