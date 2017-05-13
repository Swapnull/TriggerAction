/* global describe it */
var message = require('../lib/message-factory')
var assert = require('assert')

describe('Message Factory', () => {
  it('should send an sms when phone number is supplied', function () {
    const res = message('test@test.com', 'Hello, World!')
    assert.equal(res, 200)
  })

  it('should send an email when email address is supplied', function () {
    const res = message('+447825877505', 'Hello, World!')
    assert.equal(res, 200)
  })

  it('should return an error message when contact method is not recognised', function () {
    const res = message('Hello, World!', 'test@test.com')
    assert.equal(res, 400)
  })
})
