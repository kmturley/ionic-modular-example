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

    .controller('Submit', ['$scope', '$state', '$cordovaOauth', function ($scope, $state, $cordovaOauth) {
        'use strict';

        $scope.validate = function (el) {
            console.log('validate', el);
            $scope.submitted = true;
            if (document.querySelector('form').checkValidity()) {
                $state.go('send');
            }
        };

        $scope.login = function () {
            if (!navigator.device) { return; }
            $cordovaOauth.google('CLIENT_ID_HERE', ['email']).then(function (data) {
                console.log('login.success', JSON.stringify(data));
                $scope.data.account = JSON.stringify(data);
            }, function (e) {
                console.log('login.error', e);
                $scope.data.account = e;
            });
        };
    }]);