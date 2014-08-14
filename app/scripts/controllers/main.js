'use strict';

/**
 * @ngdoc function
 * @name fcApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the fcApp
 */
angular.module('fcApp')
  .controller('MainCtrl', function ($scope, Char) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma',
      'Jacob'
    ];
    $scope.Char = Char;
  });
