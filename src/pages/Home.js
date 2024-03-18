import React from "react";
import "../sass/Home.scss";
import ProjectCard from "../components/projets/ProjectCard";
import Skills from "../components/skills/Skills";
import AboutMe from "../components/aboutMe/AboutMe";
import Banner from "../components/banner/Banner";

const Home = () => {
  return (
    <main className="main-container">
      <Banner />
      <AboutMe />
      <div id="projets" className="projects">
        <h2>Projets réalisés</h2>
        <ProjectCard />
      </div>
      <Skills id="skills" />
    </main>
  );
};

export default Home;
