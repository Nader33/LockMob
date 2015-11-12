angular.module('starter.controllers.LockCtrl', [])

    .controller('LockCtrl', function($scope, $rootScope, $state, $timeout, $stateParams, ionicMaterialInk, ionicMaterialMotion, Locks, Lock) {

        // Set Header
        $scope.$parent.showHeader();
        $scope.$parent.clearFabs();
        $scope.isExpanded = false;
        $scope.$parent.setExpanded(false);
        $scope.$parent.setHeaderFab(false);

        $scope.goToAddLock = function(){

            $state.go('app.add_lock');
        };

        $scope.data = {
            buttonText: 'Ajouter une serrure'
        };

        $scope.toggleLock = function(lock){
            lock.state = !lock.state;
            Lock.update(lock, function(){
            })

        };

        var locks = Locks.query(function(){
            $scope.locks = locks;
        });

        if($stateParams.id){
            console.log($stateParams.id);
            var lock = Lock.get({id: $stateParams.id},function(){
                $scope.lock = lock.lock[0];
            });
        }
        else{
            $scope.lock = new Lock();
        }
        //$scope.locks = new Locks();

        $scope.create = function(lock){
            //$ionicListDelegate.$getByHandle('lock-list').showReorder(true);
            if(lock.id){
                $scope.lock.$update(function(){
                    $scope.lock = new Lock();

                });
                $state.go('app.locks');
            }else{
                $scope.lock.$save(function(){
                    $scope.locks.push(lock);
                    $scope.lock = new Lock();
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
