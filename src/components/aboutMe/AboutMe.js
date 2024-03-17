import React from "react";
import { Link } from "react-router-dom";
import "./aboutMe.scss";

const AboutMe = () => {
  return (
    <div id="about-me" className="about-me">
      <div className="details">
        <h2>À propos de moi</h2>
        <p>
          Cela fait maintenant 3 ans que j'évolue dans le monde du Web, une
          aventure passionnante qui m'a permis d'explorer divers domaines. J'ai
          entrepris différentes formations spécialisées, notamment en Web Design
          et en intégration web, afin d'acquérir des compétences solides dans
          ces domaines clés.
          <br />
          <br />
          Ma soif de connaissances m'a également conduit à explorer des
          plateformes d'apprentissage en ligne renommées telles que{" "}
          <Link to="https://www.freecodecamp.org/" target="_blank">
            FreeCodeCamp
          </Link>{" "}
          et{" "}
          <Link to="https://www.codecademy.com/" target="_blank">
            Codecademy
          </Link>
          , où j'ai approfondi mes connaissances et perfectionné mes compétences
          techniques.
          <br />
          <br />
          Par la suite, mon intérêt pour le développement web s'est intensifié,
          m'amenant à me plonger dans le monde de la programmation avec une
          curiosité insatiable. J'ai ainsi exploré des langages et des
          environnements de développement variés, notamment en commençant par le
          langage Swift sur{" "}
          <Link
            to="https://www.apple.com/fr/swift/playgrounds/"
            target="_blank"
          >
            SwiftPlaygrounds
          </Link>
          de Apple . Cette période de découverte a été cruciale pour moi, car
          elle m'a permis de définir ma passion et de me concentrer sur mes
          objectifs professionnels.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
