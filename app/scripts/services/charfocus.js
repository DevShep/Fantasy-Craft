'use strict';

/**
 * @ngdoc service
 * @name fcApp.CharFocus
 * @description
 * # CharFocus
 * Service in the fcApp.
 */
angular.module('fcApp')
  .factory('CharFocus', function CharFocus() {
    var Focus = function(name, type) {
    	if(type !== 'Crafting' && type !== 'Riding') {
        throw new Error('Focus type is neither Crafting nor Riding');
      }
      
      this.name = name;
      this.type = type;
    };

    return {
      Focus: function(name, type) {
        return new Focus(name, type);
      }
    };
  });
