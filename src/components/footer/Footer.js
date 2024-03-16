import React, { useState } from "react";
import "./footer.scss";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Formulaire soumis avec les données :", formData);

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div id="contact" className="footer-container">
      <div>Contenu du pied de page</div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nom :</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />

        <label htmlFor="email">Email :</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />

        <label htmlFor="message">Message :</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
        ></textarea>

        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
};

export default Footer;
