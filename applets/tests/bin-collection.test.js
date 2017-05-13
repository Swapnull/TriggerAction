/* global describe it */
const BinCollection = require('../bin-collection')
const assert = require('assert')
require('mocha-sinon')

describe('Bin Collection', () => {
  var binCollection = new BinCollection()
  
  beforeEach(function() {
    this.sinon.stub(console, 'log');
  });
  
  it('should log  "leaving work" when further than 0.5km away', function () {
  
  })
})
