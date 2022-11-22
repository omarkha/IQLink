import React, { useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";

const AboutSection = () => {
  const [collapsed, setCollapsed] = useState(true);

  const style = collapsed ? { height: "200px" } : { height: "fit-content" };

  const { user } = useAuthContext();
  return (
    <div className="about-section">
      <div className="container">
        <div className="about-collapsable" style={style}>
          <h4 className="section-title">
            About
            {user ? (
              <button className="bg-warning text-dark">Edit</button>
            ) : null}
          </h4>
          <h5
            style={{ cursor: "pointer" }}
            onClick={() => setCollapsed(!collapsed)}
          >
            See More
          </h5>
          <p>
            Easy going and optimistic Software Developer who's comfortable
            working with both, Object-Oriented Programming and Procedural
            Programming and is familiar with RESTful APIs. Other than Database
            Technologies: MongoDB and PostgreSQL. I improve performance, as well
            as boost UX whenever possible, have great skills in prioritization,
            and I can operate under pressure.
            <br />
            <br />
            I have exemplary client-side skills, due to taking graphics design
            classes as a student at my high school. I have also had computer
            science classes from 10th grade to 12th grade. I have great
            communication skills and I can convey complex messages clearly and
            coherently.
            <br />
            <br />
            I have read over 50 books on different topics in the past 3 years or
            so, such as Copywriting, Entrepreneurship and the English language.
            And I have the ability to quickly and easily comprehend very complex
            and abstract programming concepts because of my intuitive
            personality.
            <br />
            <br />
            As an organized individual, I cultivate structure in the form of
            lists, plans and schedules. With the ability to rapidly acquire and
            master skills. I am very driven, and very ambitious and I love
            taking on new challenges.
            <br />
            <br />
            I aspire to keep improving until becoming a well-rounded and
            top-tier software developer.
            <br />
            <br />
            <br />
            <br />
            Portfolio: https://omarkhalil34v.netlify.app
          </p>
        </div>{" "}
      </div>
    </div>
  );
};

export default AboutSection;
