import React from "react";
import { Link } from "react-router-dom";
import { HashLink as Anchor } from "react-router-hash-link";
import Github from "../../assets/icones/github.svg";
import "./banner.scss";

const Banner = () => {
  return (
    <div id="home" className="banner">
      <div className="banner-info">
        <h1>
          Yvan
          <br /> Marville
        </h1>
        <h2>Intégrateur / Développeur Web</h2>
        <p>
          J’ai 22 ans, et je suis actuellement dans une formation
          <br />
          chez Openclassroom, pour 2024 j'espère passer au niveau supérieur
          <br />
          et faire une alternance dans une entreprise pour gagner en expérience
          et connaissance.
        </p>
        <div className="contact-banner">
          <Anchor smooth to="/#contact">
            {" "}
            <div className="contact">ME CONTACTER</div>
          </Anchor>

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
  );
};

export default Banner;
