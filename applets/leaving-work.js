const message = require('./lib/message-factory')
const moment = require('moment')
const GeoPoint = require('geopoint');
const data = require('../data/applets.json').leavingWork

const location = data.location
const centerCoord = new GeoPoint(location.workCoords.latitude, location.workCoords.longitude);
const currentCoord = getCurrentLocation()
const distance = centerCoord.distanceTo(currentCoord, true)

/* Get the current location of the users device*/
function getCurrentLocation () {
  /* Would use something like navigator.geolocation.getCurrentPosition in production */ 
  return new GeoPoint(location.currentCoords.latitude, location.currentCoords.longitude)
}

/* Are we within an hour of the estimated leaving time? */
function withinLeavingTime () {
  const current = moment(new Date()).format('HHmm')
  return data.leavingTime -100 < current && current < data.leavingTime + 100
}

module.exports = () => {
  if (distance > 0.5) {
      message(data.targetNumber, data.message)
  }
}
