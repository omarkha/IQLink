import React from "react";
import SuggestionPerson from "./SuggestionPerson";
import SuggestionTeam from "./SuggestionTeam";

const SuggestionsSection = () => {
  return (
    <div className="suggestions-section">
      <div className="suggested-people">
        <h3 className="section-title suggested-title">Connect suggestions</h3>
        <SuggestionPerson name="John Stones" title="Graphics Designer" />
        <SuggestionPerson name="John Stones" title="Graphics Designer" />
        <SuggestionPerson name="John Stones" title="Graphics Designer" />{" "}
        <SuggestionPerson name="John Stones" title="Graphics Designer" />
        <SuggestionPerson name="John Stones" title="Graphics Designer" />{" "}
        <SuggestionPerson name="John Stones" title="Graphics Designer" />
      </div>
      <div className="suggested-teams">
        <SuggestionTeam
          teamName="Mangos Team"
          mission="Working to improve Environment"
        />
        <SuggestionTeam
          teamName="Blue Team"
          mission="Working to improve security"
        />
        <SuggestionTeam
          teamName="Lorem Team"
          mission="lorem lorem ipsk aslke proper"
        />
        <SuggestionTeam
          teamName="Pineapples Team"
          mission="lorem lorem ipsk aslke proper"
        />
      </div>
    </div>
  );
};

export default SuggestionsSection;
