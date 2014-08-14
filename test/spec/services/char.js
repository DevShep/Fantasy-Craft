'use strict';

describe('Service: Char', function () {

  // load the service's module
  beforeEach(module('fcApp'));

  // instantiate service
  var Char;
  beforeEach(inject(function (_Char_) {
    Char = _Char_;
  }));

  it('should have attributes', function() {
    expect(Char.attributes).toBeDefined();
  });

  it(' should have info', function() {
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

});
