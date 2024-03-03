import React from "react";
import "./projet.scss";

const Project = ({
  projetDate,
  projetTitle,
  projetDetails,
  backgroundImage,
}) => {
  return (
    <div
      className="project"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div>
        <p>{projetDate}</p>
        <h2>{projetTitle}</h2>
        <p>{projetDetails}</p>
      </div>
    </div>
  );
};

export default Project;
