(function () {
    
    'use strict';
    
    angular.module('myApp').service('PassData', PassData);
    
    function PassData() {
        return {
            title: "",
            message: "",
            number: ""
        };
    }
    
}());