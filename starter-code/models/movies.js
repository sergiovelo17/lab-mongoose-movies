const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieSchema = new Schema({
  title: String,
  genre: String,
  plot: String,
  actor: [{type:Schema.Types.ObjectId, ref: 'Celebrity'}],
  author: {type:Schema.Types.ObjectId, ref: 'User'},
  img: String
})
const Movie = mongoose.model("Movie",movieSchema);
module.exports = Movie;