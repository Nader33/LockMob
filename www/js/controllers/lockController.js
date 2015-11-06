angular.module('starter.controllers.LockCtrl', [])

    .controller('LockCtrl', function($scope, $rootScope, $state, $timeout, $stateParams, ionicMaterialInk, ionicMaterialMotion, Locks) {

        // Set Header
        $scope.$parent.showHeader();
        $scope.$parent.clearFabs();
        $scope.isExpanded = false;
        $scope.$parent.setExpanded(false);
        $scope.$parent.setHeaderFab(false);


        var locks = Locks.query(function(){
            $scope.locks = locks;
            console.log('LOCKS',$scope.locks);
        });

        $scope.locks = new Locks();


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
