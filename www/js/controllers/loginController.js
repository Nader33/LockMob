angular.module('starter.controllers.loginCtrl', [])

    .controller('LoginCtrl', function($scope, $rootScope, authService, $state, $timeout, $stateParams, ionicMaterialInk) {

        $scope.user = {
            email: '',
            password: ''
        };
        $scope.message = "";



        $scope.login = function(){

            if(!$scope.isLoggedIn())
            {
                authService.login($scope.user).success(function(res){

                    $rootScope.user = res.user;

                    window.localStorage.setItem("user", JSON.stringify(res.user));
                    window.localStorage.setItem("authenticated", 1);

                    $scope.message = '';

                    $state.go('app.home');

                }).error(function(res){
                    $scope.message = res.err;
                });
            }
        };

        $scope.logout = function(){

            console.log('logout');

            if($scope.isLoggedIn())
            {
                window.localStorage.removeItem("user");
                window.localStorage.removeItem("authenticated");

                $scope.message = '';

                $state.go('app.home');

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

       //if($scope.isLoggedIn()){
       //
       //     $state.go('app.home');
       // }


        console.log('onENter event', $stateParams);

        if ($stateParams['logout'] == 'logout'){
            console.log('sors !!!');
            $scope.logout();
        }


        $scope.$parent.clearFabs();
        $timeout(function() {
            $scope.$parent.hideHeader();
        }, 0);
        ionicMaterialInk.displayEffect();
    });
