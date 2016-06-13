/**
 * Create
 */

/*globals angular */

angular.module('create', [])

    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        'use strict';
        $stateProvider.state('create', {
            url: '/create',
            templateUrl: 'components/create/create.html',
            controller: 'Create'
        });
    }])

    .controller('Create', ['$scope', '$state', function ($scope, $state) {
        'use strict';
    }]);