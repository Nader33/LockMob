angular.module('starter.controllers.loginCtrl', [] )

    .controller('LoginCtrl', function($scope, $rootScope, authService, $state, $timeout, $stateParams, ionicMaterialInk) {

        $scope.user = {
            email: '',
            username: '',
            password: ''
        };
        $scope.message = "";



        $scope.login = function(){

            if(!$scope.isLoggedIn())
            {
                authService.login($scope.user).success(function(res){

                    $rootScope.user = res.user;

                    window.localStorage.setItem("user", JSON.stringify(res.user));
                    window.localStorage.setItem("token", res.token);
                    window.localStorage.setItem("authenticated", 1);

                    $scope.message = '';

                    $state.go('app.locks');

                }).error(function(res){
                    $scope.message = res.err;
                });
            }
        };

        $scope.logout = function(){

            if($scope.isLoggedIn())
            {
                window.localStorage.removeItem("user");
                window.localStorage.removeItem("token");
                window.localStorage.removeItem("authenticated");

                $scope.message = '';

                $state.go('app.locks');

            }
        };

        $scope.register = function(){

            console.log('register', $scope.user);

            if(!$scope.isLoggedIn())
            {
                console.log('attempt to register');

                authService.register($scope.user).success(function(res){

                    $scope.message = "L'inscription a été prise en compte";

                    $state.go('app.login');

                }).error(function(res){
                    $scope.message = res.err;
                });
            }
        };

        $scope.isLoggedIn = function() {
            if(window.localStorage.getItem("user") !== undefined && window.localStorage.getItem("authenticated") == 1) {
                console.log('already connected', window.localStorage.getItem("user") , window.localStorage.getItem("authenticated"));

                return true;
            } else {
                return false;
            }
        };

        if ($stateParams['logout'] == 'logout'){
            $scope.logout();
        }


        $scope.$parent.clearFabs();
        $timeout(function() {
            $scope.$parent.hideHeader();
        }, 0);
        ionicMaterialInk.displayEffect();
    });
