const Post = require("../models/post.model");

const getPosts = async (req, res) => {
  try {
    const profilePosts = await Post.find({ post_origin: req.params.uid });
    res.json(profilePosts);
  } catch (error) {
    throw new Error("err: ", error);
  }
};

const getPost = async (req, res) => {
  try {
    const post = await Post.findOne({ post_origin: req.params.pid });
    res.json(post);
  } catch (error) {
    throw new Error("err: ", error);
  }
};

const addPost = async (req, res) => {
  try {
    const post = await Post.create(req.body);
    res.json(post);
  } catch (error) {
    throw new Error("err: ", error);
  }
};

module.exports = {
  getPost,
  getPosts,
  addPost,
};
