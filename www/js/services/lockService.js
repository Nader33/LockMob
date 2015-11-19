angular.module('starter.service')
    .service('lockService', function (Locks, Lock) {

        //this.locks = new Locks();
        this.locks = [];

        this.populate = function(){
            Locks.query().$promise.then(function(locks){
                this.locks = locks;
                console.warn(this.locks);
            });
        }

    });