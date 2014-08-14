'use strict';

/**
 * @ngdoc function
 * @name fcApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the fcApp
 */
angular.module('fcApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
