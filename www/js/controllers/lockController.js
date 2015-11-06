angular.module('starter.controllers.LockCtrl', [])

    .controller('LockCtrl', function($scope, $rootScope, $state, $timeout, $stateParams, ionicMaterialInk, ionicMaterialMotion, Locks, Lock) {

        // Set Header
        $scope.$parent.showHeader();
        $scope.$parent.clearFabs();
        $scope.isExpanded = false;
        $scope.$parent.setExpanded(false);
        $scope.$parent.setHeaderFab(false);

        $scope.data = {
            buttonText: 'Ajouter une serrure'
        };

        var locks = Locks.query(function(){
            $scope.locks = locks;
        });

        //$scope.locks = new Locks();
        $scope.lock = new Lock();

        $scope.create = function(lock){
            //$ionicListDelegate.$getByHandle('lock-list').showReorder(true);
            if(lock.id){
                $scope.lock.$update(function(){
                    $scope.lock = new Lock();

                });
                $state.go('app.home');
            }else{
                $scope.lock.$save(function(){
                    $scope.locks.push(lock);
                    console.log('lock saved');
                    $scope.lock = new Lock();
                });
                $state.go('app.home');
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
