angular.module('starter.service', ['starter.controllers.loginCtrl', 'starter.config'])
    .service('authService', ['$http','constantService', function ($http, constantService) {

        urlBase = constantService.getUrl();

        this.login = function (params) {

            return $http.post(urlBase + 'login', params );
        };

        this.register = function (params) {

            return $http.post(urlBase + 'register', params );
        };

    }]);