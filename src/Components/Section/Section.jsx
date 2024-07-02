import React from "react";
import "./section.css";
import Arrow from "../../images/arrow-icon.svg";

const Section = ({ title, children }) => {
  return (
    <div className="section">
      <div className="contents">
        <h1>{title}</h1>
        {children}
        <div className="icon">
          <img src={Arrow} alt="arrow icon" className="arrowIcon" />
        </div>
      </div>
    </div>
  );
};

export default Section;
