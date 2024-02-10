import React from "react";
import { MenuPageStyled } from "./MenuPageStyles";
import MenuCard from "./MenuCard";
import { menuCardsArray } from "./MenuCardsArray";

function MenuPage() {
  const renderCards = (cards) => {
    return cards.map((card) => {
      return (
        <MenuCard
          key={card.id}
          img={card.img}
          alt={card.alt}
          title={card.title}
          price={card.price}
        />
      );
    });
  };

  return (
    <MenuPageStyled>
      <h1>Nuestro Menú</h1>
      <hr />
      <div className="cards-container">{renderCards(menuCardsArray)}</div>
      <hr />
    </MenuPageStyled>
  );
}

export default MenuPage;
