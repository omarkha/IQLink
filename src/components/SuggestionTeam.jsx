import React from "react";

const SuggestionTeam = (props) => {
  return (
    <div className="suggestion suggestion-team">
      <h3>{props.teamName}</h3>
      <h4>{props.mission}</h4>
    </div>
  );
};

export default SuggestionTeam;
