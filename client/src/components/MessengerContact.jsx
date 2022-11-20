import React from "react";
import defaultImage from "../assets/defaultProfileImage.jpg";
const MessengerContact = (props) => {
  return (
    <div className="messenger-contact">
      <div
        className="messenger-contact-picture"
        style={{ backgroundImage: `url(${defaultImage})` }}
      ></div>
      <div>
        <h3>{props.name}</h3>
        <h4>{props.title}</h4>
      </div>
    </div>
  );
};

export default MessengerContact;
