import React from "react";
//import { Link } from "react-router-dom";
import { HashLink as Anchor } from "react-router-hash-link";
import "./header.scss";
import treeIcon from "../../assets/icones/tree-solid.svg";

const Header = () => {
  return (
    <header>
      <Anchor smooth to="/#home">
        <img className="home-img" alt="tree" src={treeIcon} />
      </Anchor>
      <nav>
        <ul>
          <li>
            <Anchor smooth to="/#projets">
              Projets
            </Anchor>
          </li>
          <li>
            <Anchor smooth to="/#skills">
              Compétences
            </Anchor>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
