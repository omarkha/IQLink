const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const postSchema = new Schema(
  {
    post_origin: { type: Schema.Types.ObjectId, ref: "User" },
    post_content_text: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 2000,
    },
    post_content_image: {
      type: String,
      required: false,
    },
    post_content_video: {
      type: String,
      required: false,
    },
    post_comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
    post_likes: [{ type: Schema.Types.ObjectId, ref: "Postlike" }],
    post_shares: [{ type: Schema.Types.ObjectId, ref: "User" }],
  },
  { timestamps: true }
);

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
