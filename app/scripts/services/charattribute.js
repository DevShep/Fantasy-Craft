'use strict';

/**
 * @ngdoc service
 * @name fcApp.CharAttribute
 * @description
 * # CharAttribute
 * Service in the fcApp.
 */
angular.module('fcApp')
  .factory('CharAttribute', function CharAttribute() {

   /**
     * Attribute object used to record and reference scores
     * @param {string} name Display name for attribute
     */
    var Attribute = function(name) {
      this.name = name;
      this.score = null;
      this.impaired = null;
    };

    /**
     * private function to return modifier based on score
     * @param  {number} attr score
     * @return {number}      modifier
     */
    var _calcMod = function(attr) {
      return Math.round((attr - 11) / 2);
    };

    /**
     * Returns either '-' or the calculated modifier for attr
     * @param  {number} attr attribute score
     * @return {mixed}      number or '-' if attr is null
     */
    var _returnMod = function(attr) {
      if (attr === null) {
        return '-';
      }
      return _calcMod(attr);
    };

    /**
     * returns score modifier unless impaired
     * @return {number} modifier
     */
    Attribute.prototype.getMod = function() {
      if (this.impaired !== null) {
        return _calcMod(this.impaired);
      } else if (this.score !== null) {
        return _calcMod(this.score);
      } else {
        return 0;
      }
    };

    /**
     * returns attribute score mod or '-' if null
     * @return {[type]} [description]
     */
    Attribute.prototype.getScoreMod = function() {
      return _returnMod(this.score);
    };

    /**
     * returns attribute impaired mod or '-' if null
     * @return {[type]} [description]
     */
    Attribute.prototype.getImpairedMod = function() {
      return _returnMod(this.impaired);
    };

    return {
      Attribute: function(name) {
        return new Attribute(name);
      }
    };
  });
