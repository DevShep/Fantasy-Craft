'use strict';

describe('Controller: NavCtrl', function () {

  // load the controller's module
  beforeEach(module('fcApp'));

  var NavCtrl,
    scope,
    location;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $location) {
    scope = $rootScope.$new();
    location = $location;
    NavCtrl = $controller('NavCtrl', {
      $scope: scope,
      $location: location
    });
    
  }));

  it('should return "active" for when location.path() matches parameter passed into getClass()', function () {
    location.path('/');
    expect(scope.getClass('/')).toBe('active');
  });

  it('should return "" for when location.path() does not match parameter passed into getClass()', function () {
    location.path('/test');
    expect(scope.getClass('/')).toBe('');
  });
});
