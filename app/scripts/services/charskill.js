'use strict';

/**
 * @ngdoc service
 * @name fcApp.CharSkill
 * @description
 * # CharSkill
 * Factory in the fcApp.
 */
angular.module('fcApp')
  .factory('CharSkill', function (Char) {
    
    var Skill = function(name, suggested) {
      this.name = name;
      this.suggested = suggested;
      this.attribute = null;
      this.ranks = null;
      this.misc = null;
      this.origin = false;
      this.threat = null;
    };

    var _getAttrMod = function(attr) {
      return Char.getAttr(attr).getMod();
    };

    Skill.prototype.getBonus = function() {
      return this.ranks + this.misc + _getAttrMod(this.attribute);
    };

    // Public API here
    return {
      Skill: function (name, suggested) {
        return new Skill(name, suggested);
      }
    };
  });
