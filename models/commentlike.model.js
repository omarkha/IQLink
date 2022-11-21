const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const commentlikeSchema = new Schema(
  {
    comment_liked: { type: Schema.Types.ObjectId, ref: "Comment" },
    like_origin: { type: Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

const Commentlike = mongoose.model("Message", commentlikeSchema);

module.exports = Commentlike;
