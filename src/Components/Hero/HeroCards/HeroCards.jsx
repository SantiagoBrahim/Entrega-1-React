import React from "react";
import { HeroCardsStyled } from "./HeroCardsStyles";

function HeroCards() {
  return (
    <HeroCardsStyled>
      <div className="card">
        <h3>Eficiencia y Rapidez</h3>
        <p>Garantizamos entregas rápidas y puntuales en cada pedido.</p>
      </div>
      <div className="card">
        <h3>Amplia Variedad</h3>
        <p>
          Desde comida local hasta platos internacionales, tenemos opciones para
          todos los gustos.
        </p>
      </div>
      <div className="card">
        <h3>Sencillo y Seguro</h3>
        <p>
          Pedí fácilmente con nuestra interfaz amigable. Transacciones seguras y
          múltiples opciones de pago para tu comodidad.
        </p>
      </div>
    </HeroCardsStyled>
  );
}

export default HeroCards;
