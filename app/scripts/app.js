'use strict';

/**
 * @ngdoc overview
 * @name sheepApp
 * @description
 * # sheepApp
 *
 * Main module of the application.
 */
var app = angular.module('sheepApp', [
  'ngCookies',
  'ngMessages',
  'ngResource',
  'ngRoute',
  'ngSanitize',
  'ngTouch',
  'ui.router',
  'ui.bootstrap'
]);


app.config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise('/main');
  //
  // Now set up the states
  $stateProvider
    // MainState: this is the landing page of the site //
    .state('main', {
      url: '/main',
      templateUrl: 'views/main.html',
      controller: 'MainCtrl'
    })
    .state('main.list', {
      url: '/list',
      templateUrl: 'views/main/main.list.html',
      controller: function($scope) {
        $scope.items = ['A', 'List', 'Of', 'Items', 'asdf','sdfg','dfgh','fghj','ghjk','hjkl','qwer','qertw','trye'];
      }
    })
    .state('main.list2', {
      url: '/list2',
      templateUrl: 'views/main/main.list2.html',
      controller: function($scope) {
        $scope.items = ['Items', 'asdf','sdfg','dfgh','fghj','ghjk','hjkl','qwer','qertw','trye'];
      }
    })
    .state('about', {
      url: '/about',
      templateUrl: 'views/about.html',
      controller: 'AboutCtrl'
    });
});

app.controller('AppCtrl', ['$scope', function($scope){
}]);

