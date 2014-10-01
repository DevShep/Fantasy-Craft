'use strict';

var _getAttrElement = function(name) {
    var attrElement;
    switch (name) {
        case 'Str':
            attrElement = element(by.repeater('attr in Char.attributes').row(0));
            break;
        case 'Dex':
            attrElement = element(by.repeater('attr in Char.attributes').row(1));
            break;
        case 'Con':
            attrElement = element(by.repeater('attr in Char.attributes').row(2));
            break;
        case 'Int':
            attrElement = element(by.repeater('attr in Char.attributes').row(3));
            break;
        case 'Wis':
            attrElement = element(by.repeater('attr in Char.attributes').row(4));
            break;
        case 'Cha':
            attrElement = element(by.repeater('attr in Char.attributes').row(5));
            break;
    }

    return attrElement;
};


function AttributeElement(name) {
  this.attr = _getAttrElement(name);
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

// main.js
describe('app homepage', function() {
  
  it('should have a title', function() {
    browser.get('index.html');
    expect(browser.getTitle()).toEqual('Fantasy Craft Character Sheet');
  });

  it('should set attribute scores', function() {
  	var strAttr = new AttributeElement('Str');
    var dexAttr = new AttributeElement('Dex');
    var conAttr = new AttributeElement('Con');
    var intAttr = new AttributeElement('Int');
    var wisAttr = new AttributeElement('Wis');
    var chaAttr = new AttributeElement('Cha');

    // Set attribute values
  	strAttr.getScore().sendKeys('14');
  	strAttr.getImpaired().sendKeys('10');
    dexAttr.getScore().sendKeys('12');
    conAttr.getScore().sendKeys('14');
    intAttr.getScore().sendKeys('16');
    wisAttr.getScore().sendKeys('11');
    chaAttr.getScore().sendKeys('12');

    expect(strAttr.getScoreMod().getText()).toBe('2');
    expect(strAttr.getImpairedMod().getText()).toBe('0');
    expect(dexAttr.getScoreMod().getText()).toBe('1');
    expect(conAttr.getScoreMod().getText()).toBe('2');
    expect(intAttr.getScoreMod().getText()).toBe('3');
    expect(wisAttr.getScoreMod().getText()).toBe('0');
    expect(chaAttr.getScoreMod().getText()).toBe('1');
  });
});
