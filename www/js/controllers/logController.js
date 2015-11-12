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
        $scope.log = new Log();

        $scope.create = function(log){
            //$ionicListDelegate.$getByHandle('log-list').showReorder(true);
            if(log.id){
                $scope.log.$update(function(){
                    $scope.log = new Log();

                });
                $state.go('app.logs');
            }else{
                $scope.log.$save(function(){
                    $scope.logs.push(log);
                    console.log('log saved');
                    $scope.log = new Log();
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
