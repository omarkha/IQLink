const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const postSchema = new Schema(
  {
    team_name: { type: String, required: true },
    team_mission_statement: { type: String, required: true },
    team_members: [{ type: mongoose.SchemaTypes.ObjectId, ref: "User" }],
  },
  { timestamps: true }
);

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
