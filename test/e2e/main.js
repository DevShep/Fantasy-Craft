'use strict';

// main.js
describe('app homepage', function() {
  it('should have a title', function() {
    browser.get('index.html');
    expect(browser.getTitle()).toEqual('Fantasy Craft Character Sheet');
  });

  it('should set attribute scores', function() {
  	/**
  	 * @todo write functions for the below locators to attributes can be easily found
  	 */
  	var strRow = element(by.repeater('attr in Char.attributes').row(0));
  	var strScore = strRow.element(by.model('attr.score'));
  	var strScoreMod = strRow.element(by.binding('attr.getScoreMod()'));
  	var strImpaired = strRow.element(by.model('attr.impaired'));
  	var strImpairedMod = strRow.element(by.binding('attr.getImpairedMod()'));

  	strScore.sendKeys('14');
  	strImpaired.sendKeys('10');
  	expect(strScoreMod.getText()).toBe('2');
  	expect(strImpairedMod.getText()).toBe('0');
  });
});
