var mongoose = require('mongoose');

var UserFriendSchema = new mongoose.Schema({
  user_id: String,
  friend_id: String,
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('UserFriend', UserFriendSchema);