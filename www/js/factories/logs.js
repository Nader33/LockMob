angular.module('starter.factory')
    .factory('Logs', function($resource, constantService){
        var urlBase = constantService.getUrl();

        return $resource(urlBase + 'logs', {}, {
            query: { method: 'GET', isArray: true },
            //create: { method: 'POST' }
        })
    })
    .factory('Log', function($resource, constantService){
        var urlBase = constantService.getUrl();

        return $resource(urlBase + 'log/:id', {id: '@id'}, {
            update: {
                method: 'PUT'
            }
        });
    });