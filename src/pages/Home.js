import React from "react";
import "../sass/Home.scss";
import ProjectCard from "../components/projets/Projet";
import Skills from "../components/skills/Skills";
import AboutMe from "../components/aboutMe/AboutMe";
import Banner from "../components/banner/Banner";

const Home = () => {
  return (
    <div className="main-container">
      <Banner />
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
