var mongoose = require('mongoose');

var UserSessionSchema = new mongoose.Schema({
  user_id: String,
  token: String,
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('UserSession', UserSessionSchema);