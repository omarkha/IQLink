import React, { useEffect } from "react";
import doha from "../assets/dohaskyline.jpg";
import default_picture from "../assets/defaultProfileImage.jpg";
import { connect } from "react-redux";
import {
  selectFollowing,
  selectMain,
  selectProjects,
  selectTeams,
} from "../store/actions/MenuActions";
import { useAuthContext } from "../hooks/useAuthContext";
import axios from "axios";
import jwt from "jwt-decode";

const Header = (props) => {
  const uri =
    process.env.NODE_ENV == "production"
      ? "https://iraqilink.herokuapp.com"
      : "http://localhost:5000";
  useEffect(() => {
    console.log(props.data);
  }, []);

  const { user } = useAuthContext();

  const fetchUserData = async () => {
    try {
      await axios
        .get(`${uri}/api/users/me/${jwt(localStorage.getItem("token")).id}`)
        .then((res) => alert(res));
    } catch (error) {
      console.log("fetchusererror", error);
    }
  };

  useEffect(() => {
    console.log("herrr: ", jwt(localStorage.getItem("token")).id);
    fetchUserData();
  }, []);

  const profilePictureStyle = user ? default_picture : default_picture;
  return (
    <header className="profile-header">
      <div className="header-info">
        <div className="container">
          <div
            className="header-banner"
            style={{ backgroundImage: `url(${doha})` }}
          >
            {user ? (
              <button className="bg-warning text-dark">Edit Cover</button>
            ) : null}
          </div>
          <div className="main-info">
            <div className="left-side">
              <div
                className="profile-picture"
                style={{ backgroundImage: `url(${profilePictureStyle})` }}
              >
                {user ? (
                  <button className="bg-warning text-dark">Change Photo</button>
                ) : null}
              </div>

              <h1>Omar Khalil</h1>
              <h3 className="text-muted">Software Engineer | ENFJ 3w4</h3>
              <h5 className="text-muted">New Paltz, NY, USA</h5>
              <h5 className="text-primary">
                https://omarkhalil34v.netlify.app
              </h5>
              <div className="main-info-buttons">
                {user ? (
                  <button className="bg-warning text-dark">Edit Info</button>
                ) : null}
                <button>contact info</button>
                <button>Message</button>
                <button>follow</button>
              </div>
            </div>
            <div className="bio">
              {user ? (
                <button className="bg-warning text-dark">Edit Bio</button>
              ) : null}
              <p>
                Optimistic and Enthusiastic Software Engineering, familiar with
                OOP and Procedural Programming, RESTful APIs. and a multitude of
                technologies.
              </p>
            </div>
          </div>{" "}
          <div className="header-nav">
            <ul>
              <li
                onClick={() => props.selectmain()}
                className="header-nav-item"
              >
                Main
              </li>
              <li
                onClick={() => props.selectprojects()}
                className="header-nav-item"
              >
                Projects
              </li>
              <li
                onClick={() => props.selectteams()}
                className="header-nav-item"
              >
                Teams
              </li>
              <li
                onClick={() => props.selectfollowing()}
                className="header-nav-item"
              >
                Following
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return { menuState: state.menuState, userState: state.userState };
};

const mapActionsToProps = (dispatch) => {
  return {
    selectmain: () => dispatch(selectMain()),
    selectprojects: () => dispatch(selectProjects()),
    selectteams: () => dispatch(selectTeams()),
    selectfollowing: () => dispatch(selectFollowing()),
  };
};

export default connect(mapStateToProps, mapActionsToProps)(Header);
