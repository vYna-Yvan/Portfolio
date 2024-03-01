import React from "react";
import "../sass/Home.scss";
import Github from "../assets/icones/github.svg";
import { Link } from "react-router-dom";
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
            <Link className="github" to="https://github.com/vYna-Yvan">
              <img alt="github" src={Github} />
              <p>Github</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
