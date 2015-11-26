angular.module('starter.controllers.userCtrl', [] )

    .controller('UserCtrl', function($scope, $rootScope, authService, $state, $timeout, $stateParams, ionicMaterialInk) {

        $scope.user = {
            email: '',
            username: '',
            password: ''
        };
        $scope.message = "";


        $scope.isLoggedIn = function() {
            $scope.user = JSON.parse(window.localStorage.getItem("user"));
            console.log($scope.user, $scope.user.username);
            return (window.localStorage.getItem("user") !== undefined && window.localStorage.getItem("authenticated") == 1);
        };

        $scope.isLoggedIn();


       /* $scope.$parent.clearFabs();
        $timeout(function() {
            $scope.$parent.hideHeader();
        }, 0);*/
        ionicMaterialInk.displayEffect();
    });
