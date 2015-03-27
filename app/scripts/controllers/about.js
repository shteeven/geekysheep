'use strict';

/**
 * @ngdoc function
 * @name sheepApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the sheepApp
 */
angular.module('sheepApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
