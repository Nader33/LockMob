angular.module('starter.LockCtrl', [])

    .controller('LockCtrl', function($scope, $rootScope, $state, $timeout, $stateParams, ionicMaterialInk, ionicMaterialMotion, Locks, Lock, lockService) {

        // Set Header
        $scope.$parent.showHeader();
        $scope.$parent.clearFabs();
        $scope.isExpanded = false;
        $scope.$parent.setExpanded(false);
        $scope.$parent.setHeaderFab(false);
        $scope.locks = [];

        $scope.goToAddLock = function(){

            $state.go('app.add_lock');
        };

        io.socket.on('connect', function () {
            io.socket.get('/api/locks', {'token': window.localStorage.getItem('token')}, function (data, jwres) {
                lockService.locks = data;
                //$scope.locks = lockService.locks;
                console.log('Lock', $scope.locks);
            });

            io.socket.on('lock', function (res) {
                //$scope.locks.push(res.data);
                lockService.push(res.data);
                //$scope.locks = lockService.locks;
                //$scope.locks.length = 0;
                $scope.locks.push({name: 'test', state: false});
                $scope.$apply();
                console.log('res', res.data);
                console.log('socket on', $scope.locks);
            });
        });

        $scope.data = {
            buttonText: 'Ajouter une serrure',
            buttonSuppr:'Supprimer la serrure'
        };

        $scope.toggleLock = function(lock){
            lock.state = !lock.state;
            Lock.update(lock, function(){
            })

        };

        $scope.$on('$ionicView.beforeEnter', function () {
            console.log('refresh');

            //$scope.locks = lockService.locks;

            lockService.populate().then(function(e){
                $scope.locks = e;
                console.warn('st', e, lockService.locks);

            });

            console.log('s', $scope.locks);
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

                    //lockService.locks.push(lock);
                    $scope.lock = new Lock();
                });
                $state.go('app.locks');
            }
        };

         $scope.delete = function(lock){
            //$ionicListDelegate.$getByHandle('lock-list').showReorder(true);
            if(lock.id){
            //   $scope.locks[lock.id].$delete(function(){
             //       console.log('Porte supprimé');
               // });
               Lock.delete({}, {'id': lock.id});
            }
            $state.go('app.locks');
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
