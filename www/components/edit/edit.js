/**
 * Edit
 */

/*globals angular */

angular.module('edit', [])

    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        'use strict';
        $stateProvider
            .state('edit', {
                url: '/edit',
                abstract: true,
                templateUrl: 'components/edit/edit.html'
            })
            .state('edit.dash', {
                url: '/dash',
                views: {
                    'edit-dash': {
                        templateUrl: 'components/edit/edit-dash.html',
                        controller: 'DashCtrl'
                    }
                }
            })
            .state('edit.chats', {
                url: '/chats',
                views: {
                    'edit-chats': {
                        templateUrl: 'components/edit/edit-chats.html',
                        controller: 'ChatsCtrl'
                    }
                }
            })
            .state('edit.chat-detail', {
                url: '/chats/:chatId',
                views: {
                    'edit-chats': {
                        templateUrl: 'components/edit/edit-chat-detail.html',
                        controller: 'ChatDetailCtrl'
                    }
                }
            })
            .state('edit.account', {
                url: '/account',
                views: {
                    'edit-account': {
                        templateUrl: 'components/edit/edit-account.html',
                        controller: 'AccountCtrl'
                    }
                }
            });
    }])

    .controller('DashCtrl', ['$scope', '$state', function ($scope, $state) {
        'use strict';
        console.log('DashCtrl');
    }])

    .controller('ChatsCtrl', ['$scope', '$state', 'Chats', function ($scope, $state, Chats) {
        'use strict';
        console.log('ChatsCtrl');
        // With the new view caching in Ionic, Controllers are only called
        // when they are recreated or on app start, instead of every page change.
        // To listen for when this page is active (for example, to refresh data),
        // listen for the $ionicView.enter event:
        //
        //$scope.$on('$ionicView.enter', function(e) {
        //});

        $scope.chats = Chats.all();
        $scope.remove = function (chat) {
            Chats.remove(chat);
        };
    }])

    .controller('ChatDetailCtrl', ['$scope', '$state', 'Chats', '$stateParams', function ($scope, $state, Chats, $stateParams) {
        'use strict';
        console.log('ChatDetailCtrl');
        $scope.chat = Chats.get($stateParams.chatId);
    }])

    .controller('AccountCtrl', ['$scope', '$state', function ($scope, $state) {
        'use strict';
        console.log('AccountCtrl');
        $scope.settings = {
            enableFriends: true
        };
    }])

    .factory('Chats', [function () {
        'use strict';
        // Might use a resource here that returns a JSON array

        // Some fake testing data
        var chats = [{
            id: 0,
            name: 'Ben Sparrow',
            lastText: 'You on your way?',
            face: 'img/ben.png'
        }, {
            id: 1,
            name: 'Max Lynx',
            lastText: 'Hey, it\'s me',
            face: 'img/max.png'
        }, {
            id: 2,
            name: 'Adam Bradleyson',
            lastText: 'I should buy a boat',
            face: 'img/adam.jpg'
        }, {
            id: 3,
            name: 'Perry Governor',
            lastText: 'Look at my mukluks!',
            face: 'img/perry.png'
        }, {
            id: 4,
            name: 'Mike Harrington',
            lastText: 'This is wicked good ice cream.',
            face: 'img/mike.png'
        }];

        return {
            all: function () {
                return chats;
            },
            remove: function (chat) {
                chats.splice(chats.indexOf(chat), 1);
            },
            get: function (chatId) {
                var i = 0;
                for (i = 0; i < chats.length; i += 1) {
                    if (chats[i].id === parseInt(chatId, 10)) {
                        return chats[i];
                    }
                }
                return null;
            }
        };
    }]);