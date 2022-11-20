import React from "react";
import { Link } from "react-router-dom";
import { logIn, logOut } from "../store/actions/LoginActions";
import { connect } from "react-redux";
const Navbar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo03"
          aria-bs-controls="navbarTogglerDemo03"
          aria-bs-expanded="false"
          aria-bs-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <Link className="navbar-brand" to="/">
          <h3>IQLink</h3>
        </Link>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <input id="nav-searchbar" type="text" placeholder="Search IQLink" />
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/jobs">
                Jobs
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/teams">
                Teams
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/training">
                Training
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/projects">
                Projects
              </Link>
            </li>
          </ul>
          <ul id="right-nav" className="navbar-nav mr-auto mt-2 mt-lg-0">
            {props.loginState.logged_in ? (
              <li className="nav-item">
                <Link className="nav-link" to="/settings">
                  Settings
                </Link>
              </li>
            ) : (
              <li className="nav-item">
                <Link to="/signup">
                  <button id="nav-login-button">Sign Up</button>
                </Link>
              </li>
            )}

            {props.loginState.logged_in ? (
              <li className="nav-item">
                <Link className="nav-link" to="/profile">
                  Profile
                </Link>
              </li>
            ) : (
              <li className="nav-item">
                <button id="nav-login-button" onClick={() => props.login()}>
                  Sign In
                </button>
              </li>
            )}
            {props.loginState.logged_in ? (
              <li className="nav-item">
                <button id="nav-login-button" onClick={() => props.logout()}>
                  Sign Out
                </button>
              </li>
            ) : null}
          </ul>
        </div>
      </div>
    </nav>
  );
};

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

export default connect(mapStateToProps, mapActionsToProps)(Navbar);
