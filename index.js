const BinCollection = require('./applets/bin-collection.js')
const LeavingWork = require('./applets/leaving-work.js')

const binCollection = new BinCollection()
const leavingWork = new LeavingWork()


setInterval(() => {
  binCollection.run()
  leavingWork.run()
}, 1000)
