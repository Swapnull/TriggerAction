/* global describe it */
const message = require('../bin-collection')
const assert = require('assert')
require('mocha-sinon')

describe('Bin Collection', () => {
  beforeEach(function() {
    this.sinon.stub(console, 'log');
  });
  
  it('should log  "leaving work" when further than 0.5km away', function () {
  
  })
})
