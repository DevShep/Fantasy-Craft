'use strict';

/**
 * @ngdoc function
 * @name fcApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the fcApp
 */
angular.module('fcApp')
  .controller('MainCtrl', function ($scope, CharManager) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma',
      'Jacob'
    ];
    $scope.Char = CharManager.data;
  });
