angular.module('starter.router', [])

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

    // Turn off caching for demo simplicity's sake
    $ionicConfigProvider.views.maxCache(0);

    /*
     // Turn off back button text
     $ionicConfigProvider.backButton.previousTitleText(false);
     */

    $stateProvider.state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'AppCtrl'
    })

        .state('app.login', {
            url: '/login',
            views: {
                'menuContent': {
                    templateUrl: 'templates/login.html',
                    controller: 'LoginCtrl'
                },
                'fabContent': {
                    template: ''
                }
            }
        })
        .state('app.register', {
                    url: '/register',
                    views: {
                        'menuContent': {
                            templateUrl: 'templates/register.html',
                            controller: 'LoginCtrl'
                        },
                        'fabContent': {
                            template: ''
                        }
                    }
                })

        .state('app.logout', {
            url: '/login/:logout',
            views: {
                'menuContent': {
                    templateUrl: '',
                    controller: 'LoginCtrl'
                },
                'fabContent': {
                    template: ''
                }
            }
        })

        .state('app.home', {
            url: '/',
            views: {
                'menuContent': {
                    templateUrl: 'templates/home.html',
                    controller: 'HomeCtrl'
                },
                'fabContent': {
                    template: '<button id="fab-profile" ng-controller="HomeCtrl" ng-click="goToAddLock()" class="button button-fab button-fab-bottom-right button-energized-900" ><i class="icon ion-plus"></i></button>',
                    controller: function ($timeout) {
                        $timeout(function () {
                            //console.log(document.getElementById('fab-profile').classList);
                            document.getElementById('fab-profile').classList.toggle('on');
                         }, 800);
                    }
                }
            },
            authenticate: true
        })
        .state('app.add_lock', {
            url: '/add_lock',
            views: {
                'menuContent': {
                    templateUrl: 'templates/add_lock.html',
                    controller: 'LockCtrl'
                },
                'fabContent': {
                    template: '<a ui-sref="app.add_lock" id="fab-profile" class="button button-fab button-fab-bottom-right button-energized-900" ><i class="icon ion-plus"></i></a>',
                    controller: function ($timeout) {
                        /*$timeout(function () {
                         document.getElementById('fab-profile').classList.toggle('on');
                         }, 800);*/
                    }
                }
            },
            authenticate: true
        })
    ;

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/login');
});
