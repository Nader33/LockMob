'use strict';

angular.module('starter.config', [])

    .constant('ENV', {
        'name': 'dev',
        'apiEndpoint': 'http://localhost:1337/api/'
    });

io.sails.url = 'http://localhost:1337/';
