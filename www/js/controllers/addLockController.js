angular.module('starter.controllers.AddLockCtrl', [])

    .controller('AddLockCtrl', function($scope, $rootScope, $state, $timeout, $stateParams, ionicMaterialInk, ionicMaterialMotion, Locks, Lock, lockService) {

        // Set Header
        $scope.$parent.showHeader();
        $scope.$parent.clearFabs();
        $scope.isExpanded = false;
        $scope.$parent.setExpanded(false);
        $scope.$parent.setHeaderFab(false);
        $scope.lock = new Lock();

        $scope.data = {
            buttonText: 'Ajouter une serrure'
        };

        $scope.create = function(lock){
            //$ionicListDelegate.$getByHandle('lock-list').showReorder(true);
            if(lock.id){
                $scope.lock.$update(function(){
                    $scope.lock = new Lock();

                });
                $state.go('app.locks');
            }else{
                $scope.lock.$save(function(){

                    console.log('lock', lock);
                    lockService.push(lock);
                    //$scope.lock = new Lock();
                });
                $state.go('app.locks');
            }
        };



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
