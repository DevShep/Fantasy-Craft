'use strict';

// main.js
describe('angularjs homepage', function() {
  it('should have a title', function() {
    browser.get('index.html');
    expect(browser.getTitle()).toEqual('Fantasy Craft Character Sheet');
  });
});