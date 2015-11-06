angular.module('starter.service', ['starter.controllers.loginCtrl', 'starter.config'])
    .service('authService', ['$http','constantService', function ($http, constantService) {

        urlBase = constantService.getUrl();

        this.login = function (params) {

            return $http.post(urlBase + 'login', params );
        };

        this.register = function (params) {

            return $http.post(urlBase + 'register', params );
        };

    }]).service('lockService', ['$http', 'constantService', function ($http, constantService) {

        var urlBase = constantService.getUrl();

        this.locks = function () {

            return $http.get(urlBase + 'lock');
        };

        this.get = function (id) {

            return $http.get(urlBase + 'lock', params );
        };

    }]).service('constantService', function (ENV) {

        this.getUrl = function() {

            return ENV.apiEndpoint;
        };

    });