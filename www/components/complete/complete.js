/**
 * Complete
 */

/*globals angular */

angular.module('complete', [])

    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        'use strict';
        $stateProvider.state('complete', {
            url: '/complete',
            templateUrl: 'components/complete/complete.html',
            controller: 'Complete'
        });
    }])

    .controller('Complete', ['$scope', '$state', function ($scope, $state) {
        'use strict';
    }]);