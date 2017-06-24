var mongoose = require('mongoose');

var MessageSchema = new mongoose.Schema({
  room_id: String,
  sender_id: String,
  timestamp: { type: Date, default: Date.now },
  message: String,
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Message', MessageSchema);