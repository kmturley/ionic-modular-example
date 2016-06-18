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

        $scope.data.item = 'none selected';

        $scope.loadCamera = function () {
            if (!navigator.device) { return; }
            navigator.device.capture.captureVideo(function (files) {
                console.log('loadCamera.success', files);
                $scope.data.addVideo({ "img": "assets/example.png", "url": "assets/example.mp4" });
            }, function (e) {
                console.log('loadCamera.error', e);
                $scope.data.addVideo({ "img": "assets/example.png", "url": "assets/example.mp4" });
            });
        };

        $scope.loadCamera();
    }]);