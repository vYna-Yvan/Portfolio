import React from "react";
import "../sass/Home.scss";

import Github from "../assets/icones/github.svg";
import { Link } from "react-router-dom";
import ProjectCard from "../components/projets/Projet";
import Skills from "../components/skills/Skills";
import AboutMe from "../components/aboutMe/AboutMe";

const Home = () => {
  return (
    <div className="main-container">
      <div id="home" className="banner">
        <div className="banner-info">
          <h1>
            Yvan
            <br /> Marville
          </h1>
          <h2>Étudiant chez Openclassroom</h2>
          <p>
            Lorem ipsumfgververvbv
            <br />
            efvwefrevrgvervbrtevervv
            <br />
            wervewvrewvrevrfv
          </p>
          <div className="contact-banner">
            <div className="contact">ME CONTACTER</div>
            <Link
              className="github"
              to="https://github.com/vYna-Yvan"
              target="blank"
            >
              <img alt="github" src={Github} />
              <p>Github</p>
            </Link>
          </div>
        </div>
      </div>
      <AboutMe />
      <div id="projets" className="projects">
        <h2>Projets réaliser</h2>
        <ProjectCard />
      </div>
      <Skills id="skills" />
    </div>
  );
};

export default Home;
