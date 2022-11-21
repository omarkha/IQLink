import React from "react";
import Message from "./Message";
import { connect } from "react-redux";
import {
  collapseMessenger,
  showMessenger,
} from "../store/actions/MessengerActions";
import {
  exitMessengerBox,
  openMessengerBox,
} from "../store/actions/MessengerBoxOptions";

const MessengerBox = (props) => {
  return (
    <div className="messenger-box">
      <div className="top-options" onClick={() => props.exitmessengerbox()}>
        <h5>Messenger</h5>
      </div>
      <div className="messages-area">
        <Message />
        <Message />
        <Message />
      </div>
      <div className="messenger-options">
        <button>attach image</button>
        <button>post</button>
      </div>
      <div className="messaging-area">
        <textarea placeholder="Write your message.." />
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

export default connect(mapStateToProps, mapActionsToProps)(MessengerBox);
