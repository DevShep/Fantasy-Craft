'use strict';

/**
 * @ngdoc overview
 * @name fcApp
 * @description
 * # fcApp
 *
 * Main module of the application.
 */
angular
  .module('fcApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap'
  ])
  .constant('_', window._)
  .run(function ($rootScope) {
     $rootScope._ = window._;
  })
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
