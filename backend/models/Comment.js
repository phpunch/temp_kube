const mongoose = require("mongoose");
const { Schema } = mongoose;

const commentSchema = new Schema({
  author: { type: String },
  text: { type: String, required: true },
});

mongoose.model("comment", commentSchema);
