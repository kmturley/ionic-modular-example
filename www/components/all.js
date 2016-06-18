/**
 * All
 */

/*globals angular, cordova */

angular.module('all', [
    'ionic',
    'LocalStorageModule',
    'ngCordovaOauth',
    'complete',
    'create',
    'edit',
    'send',
    'submit',
    'welcome'
])

    .run(['$ionicPlatform', '$rootScope', 'Data', function ($ionicPlatform, $rootScope, Data) {
        'use strict';
        $ionicPlatform.ready(function () {
            $rootScope.data = Data;

            // Hide the accessory bar by default
            if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                cordova.plugins.Keyboard.disableScroll(true);

            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                window.StatusBar.styleDefault();
            }
        });
    }])

    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        'use strict';
        $urlRouterProvider.otherwise('/welcome');
    }])

    .factory('Data', ['localStorageService', function (localStorageService) {
        'use strict';
        return {
            image: {},
            images: localStorageService.get('images') || [{
                "img": "assets/image.png",
            }],
            slider: {
                minValue: 0,
                maxValue: 100,
                options: {
                    floor: 0,
                    ceil: 100,
                    step: 1
                }
            },
            video: {},
            videos: localStorageService.get('videos') || [{
                "img": "assets/video.png",
                "url": "assets/video.mp4"
            }, {
                "img": "assets/video2.png",
                "url": "assets/video2.mp4"
            }],
            addVideo: function (video) {
                this.videos.push(video);
            }
        };
    }]);