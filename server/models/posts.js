var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var PostSchema = new Schema({
  date: String,
  timeWindow: String,
  witness: String,
  animal: {
		type:				String,
    enum:				['chien', 'chat', 'perroquet', 'lapin']
  },
  color: String,
  adress: String,
  state: {
		type:				String,
    enum:				['très faible', 'faible', 'moyen', 'bon']
  },
  collar: Boolean,
});

var Post = mongoose.model("Post", PostSchema);
module.exports = Post;