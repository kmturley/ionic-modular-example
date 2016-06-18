/**
 * Send
 */

/*globals angular */

angular.module('send', ['angular-svg-round-progressbar'])

    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        'use strict';
        $stateProvider.state('send', {
            url: '/send',
            templateUrl: 'components/send/send.html',
            controller: 'Send'
        });
    }])

    .controller('Send', ['$scope', '$state', '$interval', function ($scope, $state, $interval) {
        'use strict';

        $scope.data.progress = 0;

        $scope.$on('$ionicView.enter', function (e) {
            var timer = $interval(function () {
                if ($scope.data.progress < 100) {
                    $scope.data.progress += Math.random() * 30;
                } else {
                    $interval.cancel(timer);
                    $state.go('complete');
                }
            }, 1000);
        });
    }]);