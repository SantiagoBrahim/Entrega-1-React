import React from "react";
import { ContactStyled } from "./ContactStyles";

function ContactPage() {
  return (
    <ContactStyled>
      <h1>Contacto</h1>
      <hr />
      <div className="container">
        <div className="text">
          <h2>Contáctanos</h2>
          <p>Proporciona tu información de contacto</p>
        </div>
        <div className="contact-container">
          <form>
            <input type="text" placeholder="Nombre" required />
            <input type="text" placeholder="Apellido" required />
            <input type="email" placeholder="Mail" required />
            <textarea cols="30" rows="10" placeholder="Asunto" required />
            <input type="submit" />
          </form>
          <div className="contact-info">
            <div className="contact-info__field">
              <i className="fa-solid fa-phone"></i>
              <a href="#">(123) 456-7890</a>
            </div>
            <div className="contact-info__field">
              <i className="fa-solid fa-envelope"></i>
              <a href="#">info@turbotaste.com</a>
            </div>
            <div className="social-media">
              <a href="#">
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-x-twitter"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-youtube"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-tiktok"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </ContactStyled>
  );
}

export default ContactPage;
