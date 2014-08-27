'use strict';

/**
 * @ngdoc service
 * @name fcApp.Char
 * @description
 * # Char
 * Service in the fcApp.
 */
angular.module('fcApp')
  .factory('Char', function Char(CharAttribute) {
    var Character = {};

    /**
     * Initializes character to default values
     */
    var _initCharacter = function() {
      /**
       * Character attributes
       * @type {Object}
       */
      Character.attributes = [
        CharAttribute.Attribute('Str'),
        CharAttribute.Attribute('Dex'),
        CharAttribute.Attribute('Con'),
        CharAttribute.Attribute('Int'),
        CharAttribute.Attribute('Wis'),
        CharAttribute.Attribute('Cha')
      ];

      /**
       * Basic info about the character
       * @type {Object}
       */
      Character.info = {
        name: null,
        species: null,
        specialty: null,
        player: null,
        xp: null,
        nextLevel: null,
        gender: null,
        age: null,
        height: null,
        weight: null,
        eyes: null,
        hair: null
      };
    };

    /**
     * Finds and returns the attr named; false if nothing found
     * @param  {string} attr attribute name
     * @return {object}      CharAttribute
     */
    Character.getAttr = function(attr) {
      var retAttr = false;

      this.attributes.some(function(value) {
        if(value.name === attr) {
          retAttr = value;
          return true;
        } else {
          return false;
        }
      });

      return retAttr;
    };

    Character.reset = function() {
      _initCharacter();
    };


    _initCharacter();
    return Character;
  });
