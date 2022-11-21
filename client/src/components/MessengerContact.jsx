import React from "react";
import defaultImage from "../assets/defaultProfileImage.jpg";
import { connect } from "react-redux";
import {
  collapseMessenger,
  showMessenger,
} from "../store/actions/MessengerActions";
import {
  exitMessengerBox,
  openMessengerBox,
} from "../store/actions/MessengerBoxOptions";

const MessengerContact = (props) => {
  return (
    <div className="messenger-contact" onClick={() => props.openmessengerbox()}>
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

const mapStateToProps = (state) => {
  console.log(state);
  return {
    messengerState: state.messengerState,
    loginState: state.loginState,
    messengerBoxState: state.messengerBoxState,
  };
};

const mapActionsToProps = (dispatch) => {
  return {
    collapsemessenger: () => dispatch(collapseMessenger()),
    showmessenger: () => dispatch(showMessenger()),
    openmessengerbox: () => dispatch(openMessengerBox()),
    exitmessengerbox: () => dispatch(exitMessengerBox()),
  };
};

export default connect(mapStateToProps, mapActionsToProps)(MessengerContact);
