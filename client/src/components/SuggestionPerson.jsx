import React from "react";
import defaultImage from "../assets/defaultProfileImage.jpg";
const Suggestion = (props) => {
  return (
    <div className="suggestion">
      {props.img ? (
        <div
          className="sug-img"
          style={{ backgroundImage: `url(${props.img})` }}
        ></div>
      ) : (
        <div
          className="sug-img"
          style={{ backgroundImage: `url(${defaultImage})` }}
        ></div>
      )}
      <h3>{props.name}</h3>
      <h4>{props.title}</h4>
    </div>
  );
};

export default Suggestion;
