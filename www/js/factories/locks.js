angular.module('starter.factory', [])
    .factory('Locks', function($resource, constantService){
        var urlBase = constantService.getUrl();

        return $resource(urlBase + 'locks', {}, {
            query: { method: 'GET', isArray: true },
            create: { method: 'POST' }
        })
    })
    .factory('Lock', function($resource, constantService){
        var urlBase = constantService.getUrl();

        return $resource(urlBase + 'lock/:id', {id: '@id'}, {
            update: {
                method: 'PUT'
            }
        });
    });