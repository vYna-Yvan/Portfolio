import React from "react";
import "./skills.scss";
import jsIcon from "../../assets/icones/js.svg";
import reactIcon from "../../assets/icones/react.svg";
import sassIcon from "../../assets/icones/sass.svg";
import htmlIcon from "../../assets/icones/html5.svg";
import cssIcon from "../../assets/icones/css3-alt.svg";
import routerIcon from "../../assets/icones/route-solid.svg";

const Skills = () => {
  const skillsList = [
    { name: "React", icon: reactIcon, color: "#61dafb" },
    { name: "JavaScript", icon: jsIcon, color: "#f0db4f" },
    { name: "Sass", icon: sassIcon, color: "#cc6699" },
    { name: "CSS", icon: cssIcon, color: "#2965f1" },
    { name: "HTML", icon: htmlIcon, color: "#e06b07" },
    { name: "Router", icon: routerIcon, color: "#eb4034" },
    // Ajoutez d'autres compétences au besoin
  ];

  return (
    <div id="skills" className="skills-container">
      <h2>Compétences</h2>
      <div className="skills-grid">
        {skillsList.map((skill, index) => (
          <div
            key={index}
            className="skill-card"
            style={{ backgroundColor: skill.color }}
          >
            <div className="skill-icon">
              <img src={skill.icon} alt={skill.name} />
            </div>
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
