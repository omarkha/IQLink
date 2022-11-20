import React from "react";
import { connect } from "react-redux";
import {
  collapseMessenger,
  showMessenger,
} from "../store/actions/MessengerActions";

import MessengerContact from "./MessengerContact";
const Messenger = (props) => {
  if (props.messengerState.collapsed) {
    return (
      <div onClick={() => props.showmessenger()} id="messenger-icon">
        <h5>Messages</h5>
      </div>
    );
  } else {
    return (
      <div className="messenger">
        <div
          className="messenger-top"
          onClick={() => props.collapsemessenger()}
        >
          <h5>Messenger</h5>
        </div>
        <div className="messages">
          <MessengerContact name="Ahmed Ziad" title="copywriter" />
          <MessengerContact name="Madjed Fahad" title="software engineer" />
          <MessengerContact name="Ahmed Ziad" title="copywriter" />
          <MessengerContact name="Madjed Fahad" title="software engineer" />
          <MessengerContact name="Ahmed Ziad" title="copywriter" />
          <MessengerContact name="Madjed Fahad" title="software engineer" />
        </div>
        <div className="message-input">
          <input type="text" placeholder="Search messages..." />
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  console.log(state);
  return { messengerState: state.messengerState, loginState: state.loginState };
};

const mapActionsToProps = (dispatch) => {
  return {
    collapsemessenger: () => dispatch(collapseMessenger()),
    showmessenger: () => dispatch(showMessenger()),
  };
};

export default connect(mapStateToProps, mapActionsToProps)(Messenger);
