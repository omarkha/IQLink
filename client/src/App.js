import logo from "./logo.svg";
import "./App.css";
import ProfilePage from "./pages/ProfilePage";
import Navbar from "./components/Navbar";
import { SiMessenger } from "react-icons/si";
import Messenger from "./components/Messenger";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { connect } from "react-redux";
import HomePage from "./pages/HomePage";
import {
  collapseMessenger,
  showMessenger,
} from "./store/actions/MessengerActions";
import { logIn, logOut } from "./store/actions/LoginActions";
import SignUpPage from "./pages/SignUpPage";

function App(props) {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/signup" element={<SignUpPage />} />
        </Routes>
        {props.loginState.logged_in ? <Messenger /> : null}
      </div>
    </Router>
  );
}

const mapStateToProps = (state) => {
  console.log(state);
  return { messengerState: state.messengerState, loginState: state.loginState };
};

const mapActionsToProps = (dispatch) => {
  return {
    login: () => dispatch(logIn()),
    logout: () => dispatch(logOut()),
  };
};

export default connect(mapStateToProps, mapActionsToProps)(App);
