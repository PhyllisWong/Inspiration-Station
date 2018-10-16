const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
  title: String,
  body: String,
  memeId: { type: Schema.Types.ObjectId, ref: 'Meme'}
});

module.exports = mongoose.model("Comment", CommentSchema);