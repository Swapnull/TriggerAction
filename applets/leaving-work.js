const message = require('./lib/message-factory')
const moment = require('moment')
const GeoPoint = require('geopoint');
const data = require('../data/applets.json').leavingWork


class LeavingWork {
  
  constructor () {
    this.messageSent = true
  }
  
  /* Get the current location of the users device*/
  getCurrentLocation () {
    /* Would use something like navigator.geolocation.getCurrentPosition in production */ 
    return new GeoPoint(data.location.currentCoords.latitude, data.location.currentCoords.longitude)
  }
  
  /* Are we within an hour of the estimated leaving time? */
  withinLeavingTime () {
    const current = moment(new Date()).format('HHmm')
    return data.leavingTime -100 < current && current < data.leavingTime + 100
  }
  
  run () {
    const workLocation = new GeoPoint(data.location.workCoords.latitude, data.location.workCoords.longitude);
    const currentLocation = this.getCurrentLocation()
    const distance = currentLocation.distanceTo(workLocation, true)  
        
    if (this.getCurrentLocation() == this.workLocation) {
      // currently at work
      this.messageSent = false
    } else if (this.getCurrentLocation() != this.workLocation && !this.messageSent) {
      // currently not at work, but message hasnt been sent
      if (this.withinLeavingTime()) { // ensures message is only sent at end of day
        message(data.targetNumber, data.message)
        this.messageSent = true
      }
      
    }
  }

}

module.exports = LeavingWork
