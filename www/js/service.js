angular.module('starter.service', ['starter.controllers.loginCtrl'])
    .service('authService', ['$http', function ($http) {

        var urlBase = 'http://localhost:1337/api/';

        this.login = function (params) {

            return $http.post(urlBase + 'login', params );
        };

        this.register = function (params) {

            return $http.post(urlBase + 'register', params );
        };

    }]);