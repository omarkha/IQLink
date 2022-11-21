import React from "react";
import iraq_map from "../assets/iraqmap.png";
import { logIn, logOut } from "../store/actions/LoginActions";
import { connect } from "react-redux";
import HomePageFeed from "./HomePageFeed";
import { useAuthContext } from "../hooks/useAuthContext";
const HomePage = (props) => {
  const { user } = useAuthContext();

  return (
    <div className="home-page">
      <div className="container">
        {user ? (
          <HomePageFeed />
        ) : (
          <header className="main-header">
            <div className="main-header-left-side">
              <h1 className="display-1">IraqiLink</h1>
              <img src={iraq_map} alt="map of Iraq" />
            </div>
            <div className="main-header-info">
              <p>
                اهلا وسهلا بك في موقع عراق لينك. حيث تستطيع ان تتواصل مع ناس من
                مختلف المهن. وان تنسق معهم على مشاريع شخصية ام مشاريع تفيد
                المجتمع.
              </p>
              <p>
                Hello and Welcome to IQLink. Where you can network with others
                from different professional background, and collaborate with
                them on personal projects or ones that benefit soceity.
              </p>
            </div>
          </header>
        )}
      </div>
    </div>
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

export default connect(mapStateToProps, mapActionsToProps)(HomePage);
