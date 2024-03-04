import React from "react";
import "../sass/Home.scss";
import Github from "../assets/icones/github.svg";
import { Link } from "react-router-dom";
import Project from "../components/projets/Projet";
import ArgentBank from "../assets/images/Argent_bank_home.png";

const Home = () => {
  return (
    <div className="main-container">
      <div className="banner">
        <div className="banner-info">
          <h1>
            Yvan
            <br /> Marville
          </h1>
          <h2>Développeur Web junior</h2>
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
      <div className="about-me">
        <div className="details">
          <h2>À propos de moi</h2>
          <p>
            Ça fait 3 ans que je suis dans le monde du Web. J'ai suivi diverses
            formations telles que le Web Design et l'intégration web, ainsi que
            des apprentissages sur des sites tels que{" "}
            <Link to="https://www.freecodecamp.org/" target="_blank">
              FreeCodeCamp
            </Link>
            .
            <br />
            <br />
            Je me suis ensuite vraiment intéressé à ce domaine en commençant par
            la programmation sur Swift Playground par curiosité.
          </p>
        </div>
      </div>
      <div className="projects">
        <h2>Projets réaliser</h2>
        <Link className="argent-bank">
          <Project
            projetDate="2023"
            projetTitle="Argent Bank"
            projetDetails="Une application web bancaire"
          />
        </Link>
        <Project
          projetDate="2023"
          projetTitle="Argent Bank"
          projetDetails="Une application web bancaire"
          backgroundImage="../assets/images/Argent_bank_home.png"
        />
        <Project
          projetDate="2023"
          projetTitle="Argent Bank"
          projetDetails="Une application web bancaire"
          backgroundImage="../assets/images/Argent_bank_home.png"
        />
        <Project
          projetDate="2023"
          projetTitle="Argent Bank"
          projetDetails="Une application web bancaire"
          backgroundImage="../assets/images/Argent_bank_home.png"
        />
      </div>
    </div>
  );
};

export default Home;
