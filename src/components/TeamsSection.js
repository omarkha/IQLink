import React from "react";
import Team from "./Team";

const TeamsSection = () => {
  return (
    <div className="teams-section">
      <Team
        teamName="Lions of Mesoportamia"
        teamMission="improve the quality of Iraqi football"
      />
      <Team
        teamName="The Public Flowers"
        teamMission="improve the international image of Iraq"
      />
      <Team
        teamName="IRAQI MMA"
        teamMission="improve the quality of Iraqi Mixed Martial Artists"
      />
    </div>
  );
};

export default TeamsSection;
