const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    first_name: {
      type: String,
      required: true,
      trim: true,
    },
    last_name: {
      type: String,
      required: true,
      trim: true,
    },
    bio: {
      type: String,
      required: false,
      maxlength: 1000,
    },
    about: {
      type: String,
      required: false,
      maxlength: 3000,
    },
    city: {
      type: String,
      required: false,
      trim: true,
    },
    state: {
      type: String,
      required: false,
      trim: true,
    },
    country: {
      type: String,
      required: false,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      minlength: 5,
    },
    profile_image: {
      type: String,
      required: false,
    },
    banner_image: {
      type: String,
      required: false,
    },
    teams: [{ type: Schema.Types.ObjectId, ref: "Team" }],
    education: [{ type: Schema.Types.ObjectId, ref: "Education" }],
    experience: [{ type: Schema.Types.ObjectId, ref: "Experience" }],
    followers: [{ type: Schema.Types.ObjectId, ref: "User" }],
    following: [{ type: Schema.Types.ObjectId, ref: "User" }],
    posts: [{ type: Schema.Types.ObjectId, ref: "Post" }],
    comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
    post_likes: [{ type: Schema.Types.ObjectId, ref: "Postlike" }],
    comment_likes: [{ type: Schema.Types.ObjectId, ref: "Commentlike" }],
    post_shares: [{ type: Schema.Types.ObjectId, ref: "Post" }],
    sent_messages: [{ type: Schema.Types.ObjectId, ref: "Message" }],
    recieved_messages: [{ type: Schema.Types.ObjectId, ref: "Message" }],
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
