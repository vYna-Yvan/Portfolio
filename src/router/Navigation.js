import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Header from "../components/header/Header.js";
import Footer from "../components/footer/Footer.js";
import Home from "../pages/Home.js";
import Project1 from "../pages/Project1.js";
import Project3 from "../pages/Project3.js";
import Project2 from "../pages/Project2.js";

const Navigation = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Project1" element={<Project1 />} />
        <Route path="/Project2" element={<Project2 />} />
        <Route path="/Project3" element={<Project3 />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default Navigation;
