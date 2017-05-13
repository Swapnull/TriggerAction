const message = require('./lib/message-factory')
const moment = require('moment')
const user = require('../data/user.json')

module.exports = () => {
  if (moment().format('ddd') === 'Mon' && moment().format('HH:mm') === '21:00') {
    message(user.emailAddress, 'The bins need to go out tonight!')
  }
}
