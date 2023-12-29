import React from "react";
import { HeroCardsStyled } from "./HeroCardsStyles";

import { heroCards } from "./heroCardsArray";
import HeroCard from "./HeroCard";

function HeroCards() {
  return (
    <HeroCardsStyled>
      {heroCards.map((card) => {
        return (
          <HeroCard
            key={card.id}
            title={card.title}
            description={card.description}
          />
        );
      })}
    </HeroCardsStyled>
  );
}

export default HeroCards;
