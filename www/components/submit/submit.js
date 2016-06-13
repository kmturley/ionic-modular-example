/**
 * Submit
 */

/*globals angular */

angular.module('submit', [])

    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        'use strict';
        $stateProvider.state('submit', {
            url: '/submit',
            templateUrl: 'components/submit/submit.html',
            controller: 'Submit'
        });
    }])

    .controller('Submit', ['$scope', '$state', function ($scope, $state) {
        'use strict';
    }]);