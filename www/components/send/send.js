/**
 * Send
 */

/*globals angular */

angular.module('send', [])

    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        'use strict';
        $stateProvider.state('send', {
            url: '/send',
            templateUrl: 'components/send/send.html',
            controller: 'Send'
        });
    }])

    .controller('Send', ['$scope', '$state', '$timeout', function ($scope, $state, $timeout) {
        'use strict';

        $scope.$on('$ionicView.enter', function (e) {
            $timeout(function () {
                $state.go('complete');
            }, 1000);
        });
    }]);