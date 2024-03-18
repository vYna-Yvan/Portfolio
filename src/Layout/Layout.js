import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "../components/header/Header.js";
import Footer from "../components/footer/Footer.js";
import Home from "../pages/Home.js";

const Layout = () => {
  return (
    <Router>
      <Header />
      <Home />
      <Footer id="contact" />
    </Router>
  );
};

export default Layout;
