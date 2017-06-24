var mongoose = require('mongoose');

var RoomSchema = new mongoose.Schema({
  owner_id: String,
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Room', RoomSchema);