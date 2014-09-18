'use strict';

/**
 * @ngdoc service
 * @name fcApp.Char
 * @description
 * # Char
 * Service in the fcApp.
 */
angular.module('fcApp')
  .factory('Char', function Char(CharAttribute, CharSkill) {
    var Character = {};

    /**
     * Initializes character to default values
     */
    var _initCharacter = function() {
      /**
       * Collection of CharAttribute objects
       * @type {Array}
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

      /**
       * Collection of CharSkill objects
       * @type {Array}
       */
      Character.skills = [
        CharSkill.Skill('Acrobatics', 'Dex'),
        CharSkill.Skill('Athletics', 'Str'),
        CharSkill.Skill('Blend', 'Cha'),
        CharSkill.Skill('Bluff', 'Cha'),
        CharSkill.Skill('Crafting', 'Int'),
        CharSkill.Skill('Disguise', 'Cha'),
        CharSkill.Skill('Haggle', 'Wis'),
        CharSkill.Skill('Impress', 'Cha'),
        CharSkill.Skill('Intimidate', 'Wis'),
        CharSkill.Skill('Investigate', 'Wis'),
        CharSkill.Skill('Medicine', 'Int'),
        CharSkill.Skill('Notice', 'Wis'),
        CharSkill.Skill('Prestidigitation', 'Dex'),
        CharSkill.Skill('Resolve', 'Con'),
        CharSkill.Skill('Ride', 'Dex'),
        CharSkill.Skill('Search', 'Int'),
        CharSkill.Skill('Sense Motive', 'Wis'),
        CharSkill.Skill('Sneak', 'Dex'),
        CharSkill.Skill('Survival', 'Wis'),
        CharSkill.Skill('Tactics', 'Int')
      ];
    };

    /**
     * Finds and returns the attr named; false if nothing found
     * @param  {string} attr attribute name
     * @return {object}      CharAttribute
     */
    Character.getAttr = function(attr) {
      var retAttr = false;

      this.attributes.some(function(value) {
        if (value.name === attr) {
          retAttr = value;
          return true;
        } else {
          return false;
        }
      });

      return retAttr;
    };

    /**
     * Finds and returns the skill named; false if nothing found
     * @param  {string} skill
     * @return {object}
     */
    Character.getSkill = function(skill) {
      var retSkill = false;
      this.skills.some(function(value) {
        if (value.name === skill) {
          retSkill = value;
          return true;
        } else {
          return false;
        }
      });

      return retSkill;
    };

    /**
     * Returns the named skills total bonus
     * @param  {string} skill
     * @return {number}
     */
    Character.getSkillBonus = function(skill) {
      var _skill = this.getSkill(skill);

      if (_skill === false) {
        return false;
      }

      return this.getAttr(_skill.attribute).getMod() + _skill.getBonus();
    };

    /**
     * Resets Character to default values
     */
    Character.reset = function() {
      _initCharacter();
    };


    _initCharacter();
    return Character;
  });
