var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  community_id: String,
  email: String,
  nickname: String,
  profilepictureurl: String,
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('User', UserSchema);