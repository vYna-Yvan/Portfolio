import React from "react";
import "../sass/Home.scss";

import Github from "../assets/icones/github.svg";
import { Link } from "react-router-dom";
import ProjectCard from "../components/projets/Projet";
import Skills from "../components/skills/Skills";

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
      <div id="about-me" className="about-me">
        <div className="details">
          <h2>À propos de moi</h2>
          <p>
            Ça fait 3 ans que je suis dans le monde du Web. J'ai suivi diverses
            formations telles que le Web Design et l'intégration web, ainsi que
            des apprentissages sur des sites tels que{" "}
            <Link to="https://www.freecodecamp.org/" target="_blank">
              FreeCodeCamp
            </Link>{" "}
            ou{" "}
            <Link to="https://www.codecademy.com/" target="_blank">
              Codecademy
            </Link>
            .
            <br />
            <br />
            Je me suis ensuite vraiment intéressé à ce domaine en commençant par
            la programmation avec Swift sur Playground par curiosité.
          </p>
        </div>
      </div>
      <div id="projets" className="projects">
        <h2>Projets réaliser</h2>
        <ProjectCard />
      </div>
      <Skills id="skills" />
    </div>
  );
};

export default Home;
