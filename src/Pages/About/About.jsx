import React from "react";
import { GlobalStyle } from "../../GlobalStyles/GlobalStyles";
import HeroAbout from "./Hero/HeroAbout";
import AboutAbout from "./About/AboutAbout";
import AboutServices from "./Services/AboutServices";
import AboutReviews from "./Reviews/AboutReviews";

function About() {
  window.scrollTo(0, 0);
  return (
    <>
      <GlobalStyle />
      <HeroAbout />
      <AboutAbout />
      <AboutServices />
      <AboutReviews />
    </>
  );
}

export default About;
