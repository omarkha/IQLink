import React from "react";
import defaultImage from "../assets/defaultProfileImage.jpg";
const PostComment = () => {
  return (
    <div className="post-comment">
      <div className="comment-origin">
        <div
          id="post-profile-picture"
          style={{ backgroundImage: `url(${defaultImage})` }}
        ></div>
        <div className="col text-start">
          <h5 className=" my-0 py-0">Omar Khalil</h5>
          <h5>Software Engineer | ENFJ 3w4</h5>
        </div>
      </div>
      <p className="comment-content">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus fugiat
        optio sed. Dignissimos accusantium esse quae.
      </p>
    </div>
  );
};

export default PostComment;
