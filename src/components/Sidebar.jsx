import React from "react";
import resumePic from "../resources/images/resume-pic-example.jpeg";
import LinkItem from "./LinkItem";

const Sidebar = () => {
  return (
    // <div className="sidebar-container">
    //   <img src={resumePic} alt="profile" className="profile-pic" />
    //   <LinkItem value="Tom Shamp" />
    //   <br />
    //   <div>
    //     <i className="fas fa-envelope"></i>
    //     <LinkItem value="T.shamp7@gmail.com" />
    //   </div>
    //   <br />
    //   <div>
    //     <i className="fas fa-phone-alt"></i>
    //     <LinkItem value="(401) 678-1546" />
    //   </div>
    //   <br />
    //   <LinkItem value="INTRODUCTION" />
    //   <br />
    //   <LinkItem value="ABOUT" />
    //   <br />
    //   <LinkItem value="PROJECTS" />
    //   <br />
    //   <LinkItem value="CONTACT ME" />
    //   <br />
    //   <a className="btn" href="https://github.com/Tshamp7">
    //     {" "}
    //     <i className="fab fa-github fa-lg"></i>{" "}
    //   </a>
    //   <br />
    //   <a
    //     className="btn"
    //     href="https://www.linkedin.com/in/thomas-shamp-a1207b158/"
    //   >
    //     {" "}
    //     <i className="fab fa-linkedin fa-lg"></i>{" "}
    //   </a>
    // </div>

    <div id="menuToggle">
      <input type="checkbox" />

      <span></span>
      <span></span>
      <span></span>

      <ul id="menu">
        <li>
          <img src={resumePic} alt="profile" className="profile-pic" />
          <a className="btn" href="https://github.com/Tshamp7">
            {" "}
            <i className="fab fa-github fa-lg"></i>{" "}
          </a>
          <a
            className="btn"
            href="https://www.linkedin.com/in/thomas-shamp-a1207b158/"
          >
            {" "}
            <i className="fab fa-linkedin fa-lg"></i>{" "}
          </a>
        </li>
        <li>
          <p>
            <LinkItem value="Tom Shamp" />
          </p>
        </li>
        <li>
          {" "}
          <i className="fas fa-envelope"></i>
          <LinkItem value="T.shamp7@gmail.com" />
        </li>
        <li>
          <i className="fas fa-phone-alt"></i>
          <LinkItem value="(401) 678-1546" />
        </li>
        <a href="#!">
          <li>Introduction</li>
        </a>
        <a href="#!">
          <li>About</li>
        </a>
        <a href="#!">
          <li>Projects</li>
        </a>
        <a href="#!">
          <li>Contact</li>
        </a>
      </ul>
    </div>
  );
};

export default Sidebar;
