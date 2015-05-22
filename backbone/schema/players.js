var mongoose = require('mongoose');

var PlayerSchema = new mongoose.Schema({
  name: String
});

exports = module.exports = mongoose.model('Player', PlayerSchema);
