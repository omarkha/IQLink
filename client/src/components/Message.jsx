import React from "react";
import defaultImage from "../assets/defaultProfileImage.jpg";
import my_picture from "../assets/mypicture.jpg";
const Message = () => {
  return (
    <div className="message">
      <div className="message-top">
        <div
          style={{
            backgroundImage: `url(${my_picture})`,
            backgroundSize: "cover",
            width: "42px",
            height: "42px",
            borderRadius: "4px",
          }}
        ></div>
        <div className="column">
          <h3 className="h5 ">Omar Khalil</h3>
          <h3 className="h6">Nov. 6, 2022 at 2:30pm</h3>
        </div>
      </div>
      <div className="message-content">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia
          expedita fugit odio saepe.
        </p>
      </div>
    </div>
  );
};

export default Message;
