'use strict';

/**
 * @ngdoc service
 * @name fcApp.CharManager
 * @description
 * # CharManager
 * Service in the fcApp.
 */
angular.module('fcApp')
  .service('CharManager', function CharManager($http, Char) {
    var self = this;

    self.data = Char;

    var _processData = function(data) {
      self.data.info.name = data.name;
      self.data.info.species = data.species;
      self.data.info.player = data.player;
      self.data.info.xp = data.xp;
      self.data.info.nextLevel = data.nextLevel;
      self.data.info.gender = data.gender;
      self.data.info.age = data.age;
      self.data.info.height = data.height;
      self.data.info.weight = data.weight;
      self.data.info.eyes = data.eyes;
      self.data.info.hair = data.hair;

      // Iterate over attributes and update score and modifier.
      angular.forEach(data.attributes, function(value) {
        var attr = this.data.getAttr(value.name);
        attr.score = value.score;
        attr.impaired = value.impaired;
      }, self); //set context for loop as self
    };

    self.loadData = function() {
      $http.get('character.json').
        success(function(data) {
          _processData(data);
        });
    };


  });
