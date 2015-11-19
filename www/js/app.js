// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', [ 'ionic','starter.controllers', 'ionic-material', 'ionMdInput', 'starter.router', 'starter.service', 'starter.factory', 'starter.controllers.LogCtrl',  'starter.controllers.AddLockCtrl', 'starter.controllers.LockCtrl', 'starter.config', 'ngResource'])

.run(function($ionicPlatform, $rootScope, $state) {
    $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }
    });
    $rootScope.$on('$stateChangeStart', function(e, toState, toParams, fromState, fromParams) {

        // if user attempt to login but he's already authenticated => redirect to home
        if(toState.name == "app.login" && window.localStorage.getItem("authenticated")){
            e.preventDefault();
            $state.go('app.locks');
        }

        if(toState.authenticate == true && window.localStorage.getItem("authenticated") != 1){

            e.preventDefault();
            $state.go('app.login');
        }

    });
}).config(function ($httpProvider) {
        $httpProvider.interceptors.push('authInterceptor');
    });
