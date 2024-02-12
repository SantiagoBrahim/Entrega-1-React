import React from "react";
import { Link } from "react-router-dom";
import { FooterStyled } from "./FooterStyles";

function Footer() {
  return (
    <FooterStyled>
      <div>
        <a href="#">Quienes somos</a>
        <a href="#">Términos y Condiciones</a>
        <a href="#">Privacidad</a>
        <a href="#">Sé parte</a>
        <a href="#">Blog</a>
        <a href="#">Centro de socios</a>
      </div>
      <Link className="contact-link" to="/contact">
        Contáctanos
      </Link>
      <hr />
      <p className="copyright-text">
        ©2023 Turbo Taste: Todos los derechos reservados
      </p>
    </FooterStyled>
  );
}

export default Footer;
