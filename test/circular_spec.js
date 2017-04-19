/*jshint esversion: 6*/

const chai = require('chai');
const circle = require('../circular.js');

const expect = chai.expect;

describe('findWord function', () => {
  it('should return true when word is in the source', () => {
    expect(findWord('pie', 'applepie')).to.equal(true);
    expect(findWord('line', 'Linear')).to.equal(true);
    expect(findWord('trap', 'Pumpkin')).to.equal(false);
  });

  it('should find words circularly from the source', () => {
    expect(findWord('fict', 'Traffic')).to.equal(true);
    expect(findWord('tex', 'expect')).to.equal(true);
    expect(findWord('give', 'everything')).to.equal(false);
  });
});