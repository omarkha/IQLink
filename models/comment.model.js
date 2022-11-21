const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const postSchema = new Schema(
  {
    comment_origin: { type: Schema.Types.ObjectId, ref: "User" },
    comment_content_text: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 1000,
    },
    comment_likes: [{ type: Schema.Types.ObjectId, ref: "Commentlike" }],
  },
  { timestamps: true }
);

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
