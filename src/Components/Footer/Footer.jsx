import React from "react";
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
      <button>Contáctanos</button>
      <hr />
      <p className="copyright-text">
        ©2023 Turbo Taste: Todos los derechos reservados
      </p>
    </FooterStyled>
  );
}

export default Footer;
