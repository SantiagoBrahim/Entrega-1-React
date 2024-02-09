import React from "react";
import { servicesCards } from "./ServicesCardsArray";
import ServiceCard from "./ServiceCard";
import { AboutServicesStyled } from "./AboutServicesStyles";

function AboutServices() {
  const cardsRender = (cards) => {
    return cards.map((card) => {
      return (
        <ServiceCard
          key={card.id}
          emoji={card.emoji}
          title={card.title}
          description={card.description}
        />
      );
    });
  };

  return (
    <AboutServicesStyled>
      <h2>Nuestros Serivicios</h2>
      <hr />
      <div className="cards-container">{cardsRender(servicesCards)}</div>
    </AboutServicesStyled>
  );
}

export default AboutServices;
