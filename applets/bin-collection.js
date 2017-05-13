const message = require('./lib/message-factory')
const moment = require('moment')
const user = require('../data/user.json')
const data = require('../data/applets.json').binCollection


class BinCollection {
  constructor () {
    this.messageSent = false
  }
  
  run () {
    if (moment().format('ddd') === data.day && moment().format('HH:mm') === data.time) {
      if (!this.messageSent) {
        message(data.targetEmail, data.message)
        this.messageSent = true
      }
    } else {
      this.messageSent = false
    }
  }
}

module.exports = BinCollection
