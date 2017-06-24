var mongoose = require('mongoose');

var CommunitySchema = new mongoose.Schema({
  name: String,
  secrethash: String,
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Community', CommunitySchema);