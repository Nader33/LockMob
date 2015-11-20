angular.module('starter.service')
    .service('lockService', function (Locks, Lock) {

        //this.locks = new Locks();
        this.locks = [];

        this.populate = function(){
            return Locks.query().$promise.then(function(locks){
                // Don't work
                this.locks = locks;
                console.warn(this.locks);
                return locks;
            });
        }

        this.push = function(obj){
            this.locks.push(obj);
        }

    });