import React from "react";
import { HeroStyled } from "./HeroStyles";
import HeroCards from "./HeroCards/HeroCards";

import heroImg from "../../assets/imgs/Hero/pizza.png";

function Hero() {
  return (
    <>
      <HeroStyled>
        <div>
          <h1>Turbo Taste</h1>
          <h2>Delivery</h2>
        </div>
        <img src={heroImg} alt="Pizza" />
      </HeroStyled>
      <HeroCards />
    </>
  );
}

export default Hero;
