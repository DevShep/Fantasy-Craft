'use strict';

describe('Service: CharAttribute', function () {

  // load the service's module
  beforeEach(module('fcApp'));

  // instantiate service
  var CharAttribute;
  var attr;
  beforeEach(inject(function (_CharAttribute_) {
    CharAttribute = _CharAttribute_;
    attr = CharAttribute.Attribute('tes');
  }));

  it('should instantiate an Attribute instance', function() {
    var attrTest = CharAttribute.Attribute('tes');
    expect(attrTest instanceof CharAttribute.Attribute);
  });

  it('should return the relevant modifier', function() {
    attr.score = 12;
    expect(attr.getMod()).toBe(1);
    attr.impaired = 9;
    expect(attr.getMod()).toBe(-1);
    attr.impaired = null;
    expect(attr.getMod()).toBe(1);
    attr.score = null;
    expect(attr.getMod()).toBe(0);
  });

  it('should get the score modifier', function() {
    attr.score = 14;
    attr.impaired = 9;
    expect(attr.getScoreMod()).toBe(2);
    attr.score = null;
    expect(attr.getScoreMod()).toBe('-');
  });

  it('should get the impaired modifier', function() {
    attr.score = 14;
    attr.impaired = 9;
    expect(attr.getImpairedMod()).toBe(-1);
    attr.impaired = null;
    expect(attr.getImpairedMod()).toBe('-');
  });
});
