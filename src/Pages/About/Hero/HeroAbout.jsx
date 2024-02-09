import React from "react";
import { AboutHeroStyled } from "./HeroAboutStyles";
import HamburguesaHero from "../../../assets/imgs/AboutHero/HamburguesaHero.webp";

function HeroAbout() {
  return (
    <AboutHeroStyled>
      <div className="text">
        <h1>Turbo Taste Delivery</h1>
        <p>
          Bienvenido a <span className="bold">Turbo Taste Delivery</span> - Tu
          destino para entregas de comida rápida y confiable en la comodidad de
          tu hogar. Descubre una amplia selección de restaurantes locales,
          realiza pedidos en minutos y disfruta de entregas rápidas y seguras.
          ¡Haz que tus antojos se conviertan en realidad con Turbo Taste
          Delivery hoy mismo!
        </p>
      </div>
      <div className="img-info">
        <img src={HamburguesaHero} alt="Hamburguesa" />

        <div className="info">
          <div>
            <h2>100+</h2>
            <p>Locales Adheridos</p>
          </div>
          <div>
            <h2>3000+</h2>
            <p>Clientes Satisfechos</p>
          </div>
          <div>
            <h2>5</h2>
            <p>Años junto a vos</p>
          </div>
          <div>
            <h2>5000+</h2>
            <p>Productos disponibles</p>
          </div>
        </div>
      </div>
    </AboutHeroStyled>
  );
}

export default HeroAbout;
