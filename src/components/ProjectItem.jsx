import React from "react";

const ProjectItem = ({ image, title, url, description }) => {
  return (
    <div className="project-item-container">
      <h4>{title}</h4>
      <div className="image-container">
        <img src={image} alt="project" className="project-image" />
        <div className="overlay">
          <a href={url} className="icon">
            <i className="fas fa-external-link fa-sm"></i>
          </a>
        </div>
      </div>
      <p>{description}</p>
    </div>
  );
};

export default ProjectItem;
