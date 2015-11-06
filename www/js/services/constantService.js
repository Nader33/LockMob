angular.module('starter.service')
    .service('constantService', function (ENV) {

        this.getUrl = function() {

            return ENV.apiEndpoint;
        };

    });
