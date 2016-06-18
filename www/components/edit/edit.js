/**
 * Edit
 */

/*globals angular */

angular.module('edit', ['rzModule'])

    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        'use strict';
        $stateProvider
            .state('edit', {
                url: '/edit',
                abstract: true,
                templateUrl: 'components/edit/edit.html',
                controller: 'Edit'
            })
            .state('edit.dash', {
                url: '/dash',
                views: {
                    'edit-dash': {
                        templateUrl: 'components/edit/edit-dash.html'
                    }
                }
            })
            .state('edit.chats', {
                url: '/chats',
                views: {
                    'edit-chats': {
                        templateUrl: 'components/edit/edit-chats.html'
                    }
                }
            })
            .state('edit.account', {
                url: '/account',
                views: {
                    'edit-account': {
                        templateUrl: 'components/edit/edit-account.html'
                    }
                }
            })
            .state('edit.details', {
                url: '/details',
                views: {
                    'edit-account': {
                        templateUrl: 'components/edit/edit-details.html'
                    }
                }
            });
    }])

    .controller('Edit', ['$scope', '$state', function ($scope, $state) {
        'use strict';
        console.log('Edit');

        $scope.toggleImage = function (image) {
            if ($scope.data.image === image) {
                $scope.data.image = null;
            } else {
                $scope.data.image = image;
            }
        };

        $scope.toggleVideo = function (video) {
            if ($scope.data.video === video) {
                $scope.data.video = null;
            } else {
                $scope.data.video = video;
            }
        };

        $scope.loadGallery = function () {
            if (!navigator.camera) { return; }
            navigator.device.getPicture(function (files) {
                console.log('loadGallery.success', files);
                $scope.data.addVideo({ "img": "assets/example.png", "url": "assets/example.mp4" });
            }, function (e) {
                console.log('loadGallery.error', e);
                $scope.data.addVideo({ "img": "assets/example.png", "url": "assets/example.mp4" });
            });
        };

        $scope.$watch('data.slider.minValue', function (val) {
            console.log('minValue', val);
        });

        $scope.$watch('data.slider.maxValue', function (val) {
            console.log('maxValue', val);
        });

        $scope.loadGallery();
    }])

    .directive('video', function() {
        return {
            restrict: 'E',
            link: function (scope, element, attrs) {
                scope.$watch(attrs.vgSrc, function (video) {
                    if (video) {
                        element.attr('poster', video.img);
                        element[0].load(video.src);
                    }
                });

                scope.toggle = function () {
                    if (element[0].paused === true) {
                        element[0].play();
                    } else {
                        element[0].pause();
                    }
                };
            }
        }
    });