'use strict';

describe('Service: Char', function() {

  // load the service's module
  beforeEach(module('fcApp'));

  // instantiate service
  var Char;
  beforeEach(inject(function(_Char_) {
    Char = _Char_;
  }));

  it('should have attributes', function() {
    expect(Char.attributes).toBeDefined();
  });

  it('should have info', function() {
    expect(Char.info).toBeDefined();

    describe('Char.info', function() {
      it('should have a name', function() {
        expect(Char.info.name).toBeDefined();
      });

      it('should have a species', function() {
        expect(Char.info.species).toBeDefined();
      });

      it('should have a specialty', function() {
        expect(Char.info.specialty).toBeDefined();
      });

      it('should have a player', function() {
        expect(Char.info.player).toBeDefined();
      });

      it('should have xp', function() {
        expect(Char.info.xp).toBeDefined();
      });

      it('should have a nextLevel', function() {
        expect(Char.info.nextLevel).toBeDefined();
      });

      it('should have a gender', function() {
        expect(Char.info.gender).toBeDefined();
      });

      it('should have an age', function() {
        expect(Char.info.age).toBeDefined();
      });

      it('should have a height', function() {
        expect(Char.info.height).toBeDefined();
      });

      it('should have a weight', function() {
        expect(Char.info.weight).toBeDefined();
      });

      it('should have eyes', function() {
        expect(Char.info.eyes).toBeDefined();
      });

      it('should have hair', function() {
        expect(Char.info.hair).toBeDefined();
      });

    });
  });

  it('should fetch a particular attribute', function() {
    expect(Char.getAttr('Tes')).toBe(false);
    expect(Char.getAttr('Str').name).toBe('Str');
  });

  it('should have skills', function() {
    expect(Char.skills).toBeDefined();
  });

  it('should return the skill bonus', function() {
    Char.getAttr('Str').score = 14;
    Char.getAttr('Dex').score = 12;

    Char.getSkill('Athletics').ranks = 5;
    Char.getSkill('Athletics').misc = 1;

    expect(Char.getSkillBonus('Athletics')).toBe(8);

    Char.getAttr('Str').impaired = 10;
    expect(Char.getSkillBonus('Athletics')).toBe(6);

    Char.getSkill('Athletics').attribute = 'Dex';
    expect(Char.getSkillBonus('Athletics')).toBe(7);
  });

  it('should add focuses', function() {
    Char.addFocus('Metalurgy', 'Crafting');
    Char.addFocus('Horseback', 'Riding');
    expect(Char.focuses.length).toBe(2);
  });

  it('should remove focuses', function() {
    Char.addFocus('Metalurgy', 'Crafting');
    Char.removeFocus('Metalurgy');
    expect(Char.focuses.length).toBe(1);
  });

  it('should reset the Char into a pristine state', function() {
    Char.getAttr('Str').score = 15;
    Char.info.name = 'John';

    expect(Char.getAttr('Str').score).toBe(15);
    expect(Char.info.name).toBe('John');

    Char.reset();

    expect(Char.getAttr('Str').score).toBeNull();
    expect(Char.info.name).toBeNull();
    expect(Char.focuses.length).toBe(0);
  });

});
