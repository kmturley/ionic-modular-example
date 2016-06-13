/**
 * All
 */

/*globals angular, cordova */

angular.module('all', [
    'ionic',
    'complete',
    'create',
    'edit',
    'send',
    'submit',
    'welcome'
])

    .run(['$ionicPlatform', '$rootScope', function ($ionicPlatform, $rootScope) {
        'use strict';
        $ionicPlatform.ready(function () {
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
    }]);