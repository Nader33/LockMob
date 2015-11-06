angular.module('starter.services', [])
    .factory('Locks', function($resource){
        return $resource('http://localhost:1337/lock/:id', {id: '@id'}, {
            update: {
                method: 'PUT' //this method issues a PUT request
            }
        });
    })