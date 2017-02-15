(function () {
    
    'use strict';
    
    var app = angular.module("myApp", ['ui.router']); 
    
    app.config(function ($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/');
    
    $stateProvider 
        .state('home', {
            url: '/',
            templateUrl: 'app/views/home.html',        
            controller: 'HomeController'
        })
    
        .state('story', {
            url: '/story',
            templateUrl: 'app/views/story.html',
            controller: 'HomeController'
        })
        
        .state('about', {
            url: '/about',
            templateUrl: 'app/views/about.html'
        })
        
        .state('contact', {
            url: '/contact',
            templateUrl: 'app/views/contact.html'
        });
        
    });
    
}());