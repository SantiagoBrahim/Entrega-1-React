import React from "react";

import { AboutAboutStyled } from "./AboutAboutStyles";
import personasComiendoImg from "../../../assets/imgs/AboutAbout/personasComiendo.jpg";

function AboutAbout() {
  return (
    <AboutAboutStyled>
      <h2>Sobre Nosotros</h2>
      <hr />
      <p>
        En Turbo Taste Delivery, nos apasiona conectar a las personas con sus
        comidas favoritas de una manera conveniente y confiable. Desde nuestra
        fundación en 2019, nos hemos comprometido a ofrecer un servicio
        excepcional, seleccionando cuidadosamente los mejores restaurantes
        locales y garantizando entregas rápidas y puntuales. Nuestra misión es
        hacer que la experiencia de pedir comida sea lo más fácil y placentera
        posible para nuestros clientes.
      </p>
    </AboutAboutStyled>
  );
}

export default AboutAbout;
