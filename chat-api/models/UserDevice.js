var mongoose = require('mongoose');

var UserDeviceSchema = new mongoose.Schema({
  user_id: String,
  devicetoken: String,
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('UserDevice', UserDeviceSchema);