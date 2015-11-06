angular.module('starter.controllers.LogCtrl', [])

    .controller('LogCtrl', function($scope, $rootScope, $state, $timeout, $stateParams, ionicMaterialInk, ionicMaterialMotion, Logs, Log) {

        // Set Header
        $scope.$parent.showHeader();
        $scope.$parent.clearFabs();
        $scope.isExpanded = false;
        $scope.$parent.setExpanded(false);
        $scope.$parent.setHeaderFab(false);

        $scope.data = {
            buttonText: 'Ajouter une serrure'
        };

        var logs = Logs.query(function(){
            $scope.logs = logs;
        });

        //$scope.logs = new Logs();
        $scope.lock = new Log();

        $scope.create = function(lock){
            //$ionicListDelegate.$getByHandle('lock-list').showReorder(true);
            if(lock.id){
                $scope.lock.$update(function(){
                    $scope.lock = new Log();

                });
                $state.go('app.logs');
            }else{
                $scope.lock.$save(function(){
                    $scope.logs.push(lock);
                    console.log('lock saved');
                    $scope.lock = new Log();
                });
                $state.go('app.logs');
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
