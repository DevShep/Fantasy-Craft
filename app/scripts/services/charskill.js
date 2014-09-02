'use strict';

/**
 * @ngdoc service
 * @name fcApp.CharSkill
 * @description
 * # CharSkill
 * Factory in the fcApp.
 */
angular.module('fcApp')
  .factory('CharSkill', function() {

    var Skill = function(name, attribute) {
      this.name = name;
      this.attribute = attribute;
      this.ranks = null;
      this.misc = null;
      this.origin = false;
      this.threat = null;
    };

    Skill.prototype.getBonus = function() {
      return this.ranks + this.misc;
    };

    // Public API here
    return {
      Skill: function(name, attribute) {
        return new Skill(name, attribute);
      }
    };
  });
