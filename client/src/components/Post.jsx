import React from "react";
import defaultImage from "../assets/defaultProfileImage.jpg";
import mypicture from "../assets/mypicture.jpg";
import PostComment from "./PostComment";

const Post = (props) => {
  return (
    <div className="post">
      <div className="post-top">
        <div className="post-origin">
          <div
            id="post-profile-picture"
            style={{ backgroundImage: `url(${mypicture})` }}
          ></div>
          <div className="col text-start">
            <h5 className=" my-0 py-0">Omar Khalil</h5>
            <h5>Software Engineer | ENFJ 3w4</h5>
          </div>
        </div>
      </div>
      <p className="text-content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque beatae ut
        reiciendis cumque voluptatum quidem sit exercitationem facere quae hic
        maiores aperiam id, voluptates inventore aliquid illum quas corrupti
        temporibus?
      </p>
      <div className="media-content">
        {props.img ? <img src={props.img} alt="post image" /> : null}
        {props.video ? <video src={props.video} /> : null}
      </div>
      <div className="post-actions">
        <button>Like</button>
        <button>Share</button>
      </div>

      <textarea placeholder="Type your comment..." />
      <button>post</button>
      <hr />
      <div className="comments">
        <PostComment />
      </div>
      <button>Load more</button>
    </div>
  );
};

export default Post;
