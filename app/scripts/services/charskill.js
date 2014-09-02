'use strict';

/**
 * @ngdoc service
 * @name fcApp.CharSkill
 * @description
 * # CharSkill
 * Factory in the fcApp.
 */
angular.module('fcApp')
  .factory('CharSkill', function () {
    
    var Skill = function(name, suggested) {
      this.name = name;
      this.suggested = suggested;
      this.attribute = suggested;
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
      Skill: function (name, suggested) {
        return new Skill(name, suggested);
      }
    };
  });
