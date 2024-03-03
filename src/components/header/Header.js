//import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink as Anchor } from "react-router-hash-link";
import "./header.scss";

const Header = () => {
  return (
    <header>
      <Link to="/">
        <h1>Home</h1>
      </Link>
      <nav>
        <ul>
          <li>Compétence</li>
          <li>Projets</li>
          <li>Réseaux</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;