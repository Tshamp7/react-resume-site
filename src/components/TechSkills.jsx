import React from "react";
import ror from "../resources/images/rubyrailsicon.png";

const TechSkills = () => {
  return (
    <div className="skills-container">
      <i class="fab fa-html5 fa-lg"></i>
      <i class="fab fa-css3-alt fa-lg" style={{ color: "green" }}></i>
      <i class="fab fa-react fa-lg" style={{ color: "lightskyblue" }}></i>
      <i class="fab fa-js-square fa-lg" style={{ color: "orange" }}></i>
      <i class="fab fa-bootstrap fa-lg" style={{ color: "darkpurple" }}></i>
      <i class="fab fa-docker fa-lg" style={{ color: "lightblue" }}></i>
      <i class="fal fa-gem fa-lg" style={{ color: "darkred" }}></i>
      <img src={ror} alt="" style={{ height: "30px", width: "auto" }} />
    </div>
  );
};

export default TechSkills;
