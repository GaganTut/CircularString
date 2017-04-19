/*jshint esversion: 6*/

const chai = require('chai');
const findWord = require('../circular.js');

const expect = chai.expect;

describe('findWord function', () => {
  it('should return true when word is in the source', () => {
    expect(findWord('applepie', 'pie')).to.equal(true);
    expect(findWord('Linear', 'line')).to.equal(true);
    expect(findWord('Pumpkin', 'trap')).to.equal(false);
    expect(findWord('cat', 'catcatcatcat')).to.equal(true);
  });

  it('should find words circularly from the source', () => {
    expect(findWord('Traffic', 'fict')).to.equal(true);
    expect(findWord('expect', 'Tex')).to.equal(true);
    expect(findWord('everything', 'give')).to.equal(false);
  });
});