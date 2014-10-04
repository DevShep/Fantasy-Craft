'use strict';

function AttributeElement(name) {
  this.attr = (function(name) {
    var ele;
    switch (name) {
      case 'Str':
        ele = element(by.repeater('attr in Char.attributes').row(0));
        break;
      case 'Dex':
        ele = element(by.repeater('attr in Char.attributes').row(1));
        break;
      case 'Con':
        ele = element(by.repeater('attr in Char.attributes').row(2));
        break;
      case 'Int':
        ele = element(by.repeater('attr in Char.attributes').row(3));
        break;
      case 'Wis':
        ele = element(by.repeater('attr in Char.attributes').row(4));
        break;
      case 'Cha':
        ele = element(by.repeater('attr in Char.attributes').row(5));
        break;
    }
    return ele;
  })(name);
}

AttributeElement.prototype.getScore = function() {
  return this.attr.element(by.model('attr.score'));
};

AttributeElement.prototype.getScoreMod = function() {
  return this.attr.element(by.binding('attr.getScoreMod()'));
};

AttributeElement.prototype.getImpaired = function() {
  return this.attr.element(by.model('attr.impaired'));
};

AttributeElement.prototype.getImpairedMod = function() {
  return this.attr.element(by.binding('attr.getImpairedMod()'));
};


function SkillElement(name) {
  this.skill = (function(name) {
    var ele;
    switch (name) {
      case 'Acrobatics':
        ele = element(by.repeater('skill in Char.skills').row(0));
        break;
      case 'Athletics':
        ele = element(by.repeater('skill in Char.skills').row(1));
        break;
      case 'Blend':
        ele = element(by.repeater('skill in Char.skills').row(2));
        break;
      case 'Bluff':
        ele = element(by.repeater('skill in Char.skills').row(3));
        break;
      case 'Crafting':
        ele = element(by.repeater('skill in Char.skills').row(4));
        break;
      case 'Disguise':
        ele = element(by.repeater('skill in Char.skills').row(5));
        break;
      case 'Haggle':
        ele = element(by.repeater('skill in Char.skills').row(6));
        break;
      case 'Impress':
        ele = element(by.repeater('skill in Char.skills').row(7));
        break;
      case 'Intimidate':
        ele = element(by.repeater('skill in Char.skills').row(8));
        break;
      case 'Investigate':
        ele = element(by.repeater('skill in Char.skills').row(9));
        break;
      case 'Medicine':
        ele = element(by.repeater('skill in Char.skills').row(10));
        break;
      case 'Notice':
        ele = element(by.repeater('skill in Char.skills').row(11));
        break;
      case 'Prestidigitation':
        ele = element(by.repeater('skill in Char.skills').row(12));
        break;
      case 'Resolve':
        ele = element(by.repeater('skill in Char.skills').row(13));
        break;
      case 'Ride':
        ele = element(by.repeater('skill in Char.skills').row(14));
        break;
      case 'Search':
        ele = element(by.repeater('skill in Char.skills').row(15));
        break;
      case 'Sense Motive':
        ele = element(by.repeater('skill in Char.skills').row(16));
        break;
      case 'Sneak':
        ele = element(by.repeater('skill in Char.skills').row(17));
        break;
      case 'Survival':
        ele = element(by.repeater('skill in Char.skills').row(18));
        break;
      case 'Tactics':
        ele = element(by.repeater('skill in Char.skills').row(19));
        break;
    }
    return ele;
  })(name);
}

SkillElement.prototype.getOrigin = function() {
  return this.skill.element(by.model('skill.origin'));
};

SkillElement.prototype.getAttribute = function() {
  return this.skill.element(by.model('skill.attribute'));
};

SkillElement.prototype.getSkillBonus = function() {
  return this.skill.element(by.binding('Char.getSkillBonus(skill.name)'));
};

SkillElement.prototype.getRanks = function() {
  return this.skill.element(by.model('skill.ranks'));
};

SkillElement.prototype.getAttributeMod = function() {
  return this.skill.element(by.binding('Char.getAttr(skill.attribute).getMod()'));
};

SkillElement.prototype.getMisc = function() {
  return this.skill.element(by.model('skill.misc'));
};

SkillElement.prototype.getThreat = function() {
  return this.skill.element(by.model('skill.threat'));
};
// main.js
describe('app homepage', function() {

  var strAttr = new AttributeElement('Str');
  var dexAttr = new AttributeElement('Dex');
  var conAttr = new AttributeElement('Con');
  var intAttr = new AttributeElement('Int');
  var wisAttr = new AttributeElement('Wis');
  var chaAttr = new AttributeElement('Cha');

  var acrobaticsSkill = new SkillElement('Acrobatics');
  var athleticsSkill = new SkillElement('Athletics');

  it('should have a title', function() {
    browser.get('index.html');
    expect(browser.getTitle()).toEqual('Fantasy Craft Character Sheet');
  });

  describe('attributes', function() {
    it('should set attribute scores', function() {
      // Set attribute values
      strAttr.getScore().sendKeys('14');
      dexAttr.getScore().sendKeys('12');
      conAttr.getScore().sendKeys('14');
      intAttr.getScore().sendKeys('16');
      wisAttr.getScore().sendKeys('11');
      chaAttr.getScore().sendKeys('12');

      expect(strAttr.getScoreMod().getText()).toBe('2');
      expect(dexAttr.getScoreMod().getText()).toBe('1');
      expect(conAttr.getScoreMod().getText()).toBe('2');
      expect(intAttr.getScoreMod().getText()).toBe('3');
      expect(wisAttr.getScoreMod().getText()).toBe('0');
      expect(chaAttr.getScoreMod().getText()).toBe('1');
    });
  });

  describe('skills', function() {
    it('should set origin skills', function() {
      acrobaticsSkill.getOrigin().click();

      expect(acrobaticsSkill.getOrigin().isSelected()).toBe(true);
      expect(athleticsSkill.getOrigin().isSelected()).toBe(false);
    });

    it('should set skill ranks', function() {
      acrobaticsSkill.getRanks().sendKeys('5');
      athleticsSkill.getRanks().sendKeys('2');

      expect(acrobaticsSkill.getSkillBonus().getText()).toBe('6');
      expect(athleticsSkill.getSkillBonus().getText()).toBe('4');
    });

    it('should set skill impaired scores', function() {
      strAttr.getImpaired().sendKeys('9');
      expect(strAttr.getImpairedMod().getText()).toBe('-1');
    });

    it('should update skill bonus when attribute is impaired', function() {
      expect(athleticsSkill.getSkillBonus().getText()).toBe('1');
    });

    it('should update skill bonus when a different attribute is selected', function() {
      athleticsSkill.getAttribute().sendKeys('Dex');
      expect(athleticsSkill.getSkillBonus().getText()).toBe('3');
    });

    it('should update skill bonus when a misc mod is added', function() {
      acrobaticsSkill.getMisc().sendKeys('3');
      expect(acrobaticsSkill.getSkillBonus().getText()).toBe('9');
    });
  });
});
