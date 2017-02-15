(function () {
    
    'use strict';
    
    angular.module('myApp').factory('PersonsFactory', PersonsFactory);
    
    function PersonsFactory() {
        
        var persons =  [
            
            {
                id: 3,
                name: "rahman"
            },
            
            {
                id: 1,
                name: "bashar"
            },
            
            {
                id: 2,
                name: "anwar"
            }
        ];
        
        var factory = {};
        factory.getPersons = function(){
           return persons;  
        };
        
        return factory;
    }
        
}());