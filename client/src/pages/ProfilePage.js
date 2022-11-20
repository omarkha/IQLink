import React, { useState } from "react";
import { useSelector } from "react-redux";
import AboutSection from "../components/AboutSection";
import EducationSection from "../components/EducationSection";
import ExperienceSection from "../components/ExperienceSection";
import Header from "../components/Header";
import PostsSection from "../components/PostsSection";
import SuggestionsSection from "../components/SuggestionsSection";
import TeamsSection from "../components/TeamsSection";
import { connect } from "react-redux";
import {
  selectFollowing,
  selectMain,
  selectProjects,
  selectTeams,
} from "../store/actions/MenuActions";
const ProfilePage = (props) => {
  return (
    <div className="profile-page">
      <Header />
      <div className="container">
        <div className="sections">
          <div className="wide-section">
            {props.menuState.selected === "main" ? (
              <div>
                <AboutSection />
                <EducationSection />
                <ExperienceSection />
                <PostsSection />
              </div>
            ) : null}

            {props.menuState.selected === "teams" ? <TeamsSection /> : null}
          </div>
          <div className="side-section">
            <SuggestionsSection />
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return { menuState: state.menuState };
};

const mapActionsToProps = (dispatch) => {
  return {
    selectmain: () => dispatch(selectMain()),
    selectprojects: () => dispatch(selectProjects()),
    selectteams: () => dispatch(selectTeams()),
    selectfollowing: () => dispatch(selectFollowing()),
  };
};

export default connect(mapStateToProps, mapActionsToProps)(ProfilePage);
