import React from "react";
import backgroundOne from "../resources/images/pexels-bri-schneiter-346529.jpg";

const Main = () => {
  const topStyle = {
    width: "100%",
    height: "100vh",
    marginTop: "-30px",
    background: `url(${backgroundOne})`,
    backgroundSize: "cover",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    overflow: "hidden",
  };

  return (
    <div className="main-container">
      <div style={topStyle}>
        <div className="banner-container">
          <div className="banner-contents">Hi!</div>
          <div className="banner-contents">I'm Tom Shamp!</div>
        </div>
      </div>
      <div className="subsection-container">
        <div className="subsection">
          <h6>About</h6>
          <p>Some information about me</p>
        </div>
      </div>

      <div className="subsection-container">
        <div className="subsection">
          <h1>Projects</h1>
          <p>
            Here is a list of technologies which are showcased in my various
            projects! Select one to find out more!
          </p>
          <ul>
            <li>Ruby / Rails projects</li>
            <li>React Projects</li>
            <li>MERN stack</li>
            <li>Client Projects</li>
          </ul>
        </div>
      </div>

      <div className="subsection-container">
        <div className="subsection">
          <h1>Contact Me</h1>
          <p>Want to get in touch? Send me an email here!</p>
        </div>
      </div>
    </div>
  );
};

export default Main;
