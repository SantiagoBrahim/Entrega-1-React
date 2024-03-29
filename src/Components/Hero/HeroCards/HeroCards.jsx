import React from "react";
import { HeroCardsStyled } from "./HeroCardsStyles";
import { heroCards } from "./heroCardsArray";
import HeroCard from "./HeroCard";
import { Link } from "react-router-dom";

function HeroCards() {
  return (
    <HeroCardsStyled>
      <div className="cards-container">
        {heroCards.map((card) => {
          return (
            <HeroCard
              key={card.id}
              title={card.title}
              description={card.description}
            />
          );
        })}
      </div>
      <Link className="link-btn" to="/about">
        Sobre Nosotros
      </Link>
    </HeroCardsStyled>
  );
}

export default HeroCards;
