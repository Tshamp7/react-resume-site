import React, { useRef } from "react";
import resumePic from "../resources/images/resume-pic-example.jpeg";
import LinkItem from "./LinkItem";

const Sidebar = () => {
  const toggleMenu = useRef(null);

  const closeMenu = () => {
    toggleMenu.current.checked = false;
  };

  return (
    <div id="menuToggle">
      <input type="checkbox" ref={toggleMenu} />

      <span></span>
      <span></span>
      <span></span>

      <ul id="menu">
        <li>
          <div id="menu-pic">
            <img src={resumePic} alt="profile" className="profile-pic" />
            <div id="social-media-links">
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
              <a href="https://www.twitter.com/tom_shamp" className="btn">
                <i class="fab fa-twitter-square fa-lg"></i>
              </a>
            </div>
          </div>
        </li>
        <li>
          <LinkItem value="Tom Shamp" />
        </li>
        <li>
          <div className="link-container">
            <i className="fas fa-envelope"></i>
            <LinkItem value="  T.shamp7@gmail.com" />
          </div>
        </li>
        <li>
          <i className="fas fa-phone-alt"></i>
          <LinkItem value="  (401) 678-1546" />
        </li>
        <li>
          <a href="#introduction" onClick={closeMenu}>
            Introduction
          </a>
        </li>
        <li>
          <a href="#about" onClick={closeMenu}>
            About
          </a>
        </li>
        <li>
          <a href="#projects" onClick={closeMenu}>
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
