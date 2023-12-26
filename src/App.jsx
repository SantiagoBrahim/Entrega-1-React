import { useState } from "react";
import { GlobalStyle } from "./GlobalStyles/GlobalStyles.js";

import Header from "./Components/Header/Header.jsx";
import Hero from "./Components/Hero/Hero.jsx";
import MenuDestacado from "./Components/MenuDestacado/MenuDestacado.jsx";
import LocalesAdheridos from "./Components/LocalesAdheridos/LocalesAdheridos.jsx";
import Footer from "./Components/Footer/Footer.jsx";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <main>
        <Hero />
        <MenuDestacado />
        <LocalesAdheridos />
      </main>
      <Footer />
    </>
  );
}

export default App;
