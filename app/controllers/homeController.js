(function () {
    
    'use strict';

    angular.module('myApp').controller('HomeController', HomeController);    
    
    function HomeController($scope, PersonsFactory, PassData) {
        
        $scope.sortType     = 'name'; // set the default sort type
        $scope.sortReverse  = false;  // set the default sort order
        
        $scope.data = PassData;
        
        $scope.persons = PersonsFactory.getPersons();
    }
    
}());