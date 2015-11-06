angular.module('starter.controllers.homeCtrl', [])

    .controller('LockCtrl', function($scope, $rootScope, authService, $state, $timeout, $stateParams, ionicMaterialInk, ionicMaterialMotion) {

        // Set Header
        $scope.$parent.showHeader();
        $scope.$parent.clearFabs();
        $scope.isExpanded = false;
        $scope.$parent.setExpanded(false);
        $scope.$parent.setHeaderFab(false);

        // Set Motion
        $timeout(function () {
            ionicMaterialMotion.slideUp({
                selector: '.slide-up'
            });
        }, 300);

        $timeout(function () {
            ionicMaterialMotion.fadeSlideInRight({
                startVelocity: 3000
            });
        }, 700);




        // Set Ink
        ionicMaterialInk.displayEffect();

    });