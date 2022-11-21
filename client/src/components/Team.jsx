import React from "react";

const Team = (props) => {
  return (
    <div className="team">
      <h3>{props.teamName}</h3>
      <p>{props.teamMission}</p>
    </div>
  );
};

export default Team;
