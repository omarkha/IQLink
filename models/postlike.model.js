const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const postlikeSchema = new Schema(
  {
    post_liked: { type: Schema.Types.ObjectId, ref: "Post" },
    like_origin: { type: Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

const Postlike = mongoose.model("Message", postlikeSchema);

module.exports = Postlike;
