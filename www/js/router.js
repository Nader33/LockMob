(function(angular, undefined) {
    "use strict";
    angular.module('starter.router', ['ngMaterial', "ui.router"])
    .config(function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/tab/dash');
        $stateProvider
        .state('view1', {
            url: "/view1",
            templateUrl: "partials/view1.html"
        })
        .state('view2', {
            url: "/view2",
            templateUrl: "partials/view2.html"
        })
        .state('view3', {
            url: "/view3",
            templateUrl: "partials/view3.html"
        })
        ;
    })
    .run(function($rootScope, PrimaryAction){
      $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
        console.log(toState.name)
        switch (toState.name) {
          case 'view1':
            return PrimaryAction.show();
          case 'view2':
            return PrimaryAction.hide();
          case 'view3':
            return PrimaryAction.show();
          default:
            return PrimaryAction.hide();
        }
      });
    })
    .controller('tabCtrl', function($scope, $location, $log, $state) {
        $scope.selectedIndex = 0;

        $scope.$watch('selectedIndex', function(current, old) {
            switch (current) {
                case 0:
                    $location.url("/view1");
                    break;
                case 1:
                    $location.url("/view2");
                    break;
                case 2:
                    $location.url("/view3");
                    break;
            }
        });
    })
    .directive('primaryActionButton', function(){
      return {
        restrict: 'E',
        template:  ['<md-button ng-show="primaryAction.visible" class="md-fab md-fab-bottom-right" aria-label="Add" ng-click="primaryAction.mainAction()">',
  'ADD',
'</md-button>'].join(''),
        controller: function($scope, PrimaryAction) {
          $scope.primaryAction = PrimaryAction;
        }
      };
    })
    .service('PrimaryAction', function(){
      this.visible = false;
      this.show = function() {
        this.visible = true;
      }
      this.hide = function() {
        this.visible = false;
      }

    });

})(angular);

