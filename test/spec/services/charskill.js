'use strict';

describe('Service: CharSkill', function () {

  // load the service's module
  beforeEach(module('fcApp'));

  // instantiate service
  var CharSkill, Char, skill;

  beforeEach(inject(function (_CharSkill_, _Char_) {
    CharSkill = _CharSkill_;
    Char = _Char_;
    skill = CharSkill.Skill('tes', 'Str');

    Char.getAttr('Str').score = 14;
    Char.getAttr('Dex').score = 12;
  }));

  it('should instantiate an Skill instance', function() {
    var attrTest = CharSkill.Skill('tes');
    expect(attrTest instanceof CharSkill.Skill);
  });

  it('should return the skill bonus', function() {
    skill.ranks = 1;
    skill.misc = 2;
    skill.attribute = 'Str';
    expect(skill.getBonus()).toBe(5);

    Char.getAttr('Str').impaired = 10;
    expect(skill.getBonus()).toBe(3);

    skill.attribute = 'Dex';
    expect(skill.getBonus()).toBe(4);
  });

});
