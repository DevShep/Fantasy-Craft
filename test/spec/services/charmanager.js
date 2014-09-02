'use strict';

describe('Service: CharManager', function() {

  // load the service's module
  beforeEach(module('fcApp'));

  // instantiate service
  var CharManager;
  beforeEach(inject(function(_CharManager_) {
    CharManager = _CharManager_;
  }));

  it('should do something', function() {
    expect(!!CharManager).toBe(true);
  });

});
