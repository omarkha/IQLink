import React from "react";
import Post from "./Post";

const PostsSection = () => {
  return (
    <div className="posts-section">
      <div className="container">
        <div className="posts">
          <Post />
          <Post />
        </div>
      </div>
    </div>
  );
};

export default PostsSection;
