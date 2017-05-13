var emailValidator = require('email-validator')
var phoneValidator = require('phone')
var sanitizeHtml = require('sanitize-html')

module.exports = function (contact, body) {
  if (emailValidator.validate(contact)) {
    return sendEmail(contact, sanitizeHtml(body))
  } else if (phoneValidator(contact).length > 0) {
    return sendSms(contact, body)
  } else {
    console.log('not a valid type of message')
    return 400
  }
}

var sendEmail = (contact, body, callback) => {
  console.log('sending email to', contact, 'reading "', body, '"')
  return 200
}

var sendSms = (contact, body, callback) => {
  console.log('sending sms to', contact, 'reading "', body, '"')
  return 200
}
