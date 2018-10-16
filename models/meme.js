const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MemeSchema = new Schema({
  quote: String,
  imgUrl: String
});

module.exports = mongoose.model('Meme', MemeSchema);