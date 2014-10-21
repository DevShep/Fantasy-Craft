'use strict';

describe('Service: CharFocus', function () {

  // load the service's module
  beforeEach(module('fcApp'));

  // instantiate service
  var CharFocus;
  beforeEach(inject(function (_CharFocus_) {
    CharFocus = _CharFocus_;
  }));

  it('should instantiate a Focus instance', function() {
    var focus = CharFocus.Focus('metalurgy', 'Crafting');
    expect(focus instanceof CharFocus.Focus);
  });

  it('should ensure a correct focus type', function() {
    var testFocus = function() {
      return CharFocus.Focus('metalurgy', 'notCrafting');
    };
    
    expect(testFocus).toThrow();
  });
});
