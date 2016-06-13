/**
 * Welcome
 */

/*globals angular */

angular.module('welcome', [])

    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        'use strict';
        $stateProvider.state('welcome', {
            url: '/welcome',
            templateUrl: 'components/welcome/welcome.html',
            controller: 'Welcome'
        });
    }])

    .controller('Welcome', ['$scope', '$state', function ($scope, $state) {
        'use strict';
    }]);