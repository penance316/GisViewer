(function () {
  'use strict';



angular.module('app')
    .config(function ($stateProvider, $urlRouterProvider) {

        $stateProvider

            //home state
            .state('home', {
                url: '/',
                templateUrl: 'components/home/home.html'
            })

            //about state
            .state('about', {
                url: '/about',
                templateUrl: 'views/about.html'
            });

        $urlRouterProvider.otherwise('/');


    });


 })();
