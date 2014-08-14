'use strict';

/**
 * @ngdoc function
 * @name fcApp.controller:NavCtrl
 * @description
 * # NavCtrl
 * Controller of the fcApp
 */
angular.module('fcApp')
  .controller('NavCtrl', function ($scope, $location) {
    $scope.routes = [
      {path: '/', display: 'Info'},
      {path: '/about', display: 'About'}
    ];

    $scope.getClass = function(path) {
      if($location.path() === path) {
        return 'active';
      } else {
        return '';
      }
    };
  });

