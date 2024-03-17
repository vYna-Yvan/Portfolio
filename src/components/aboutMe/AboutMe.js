import React from "react";
import { Link } from "react-router-dom";
import "./aboutMe.scss";

const AboutMe = () => {
  return (
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
          la programmation avec{" "}
          <Link
            to="https://www.apple.com/fr/swift/playgrounds/"
            target="_blank"
          >
            SwiftPlayground
          </Link>{" "}
          par curiosité.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
