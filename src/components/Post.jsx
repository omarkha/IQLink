import React from "react";

const Post = (props) => {
  return (
    <div className="post">
      <h3>Post Title</h3>
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
    </div>
  );
};

export default Post;
