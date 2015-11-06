angular.module('starter.service', ['starter.controllers.loginCtrl'])
    .service('authService', ['$http','constantService', function ($http, constantService) {

        urlBase = constantService.getUrl();

        this.login = function (params) {

            return $http.post(urlBase + 'login', params );
        };

        this.register = function (params) {

            return $http.post(urlBase + 'register', params );
        };

    }]).service('lockService', ['$http', function ($http) {

        var urlBase = 'http://localhost:1337/api/';

        this.locks = function () {

            return $http.get(urlBase + 'lock');
        };

        this.get = function (id) {

            return $http.get(urlBase + 'lock', params );
        };

    }]).service('constantService', function () {

        var serverUrl = 'http://localhost:1337/api/';

        this.getUrl = function() {

            return serverUrl;
        };

    });