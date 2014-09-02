'use strict';

describe('Service: CharSkill', function() {

  // load the service's module
  beforeEach(module('fcApp'));

  // instantiate service
  var CharSkill, skill;

  beforeEach(inject(function(_CharSkill_) {
    CharSkill = _CharSkill_;
    skill = CharSkill.Skill('tes', 'Str');
  }));

  it('should instantiate an Skill instance', function() {
    var attrTest = CharSkill.Skill('tes');
    expect(attrTest instanceof CharSkill.Skill);
  });

  it('should return the skill bonus', function() {
    skill.ranks = 1;
    skill.misc = 2;
    expect(skill.getBonus()).toBe(3);
  });

});
