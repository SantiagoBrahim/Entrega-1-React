import React from "react";
import Hero from "../Components/Hero/Hero";
import MenuDestacado from "../Components/MenuDestacado/MenuDestacado";
import LocalesAdheridos from "../Components/LocalesAdheridos/LocalesAdheridos";
import Footer from "../Components/Footer/Footer";

function Layout() {
  return (
    <main>
      <Hero />
      <MenuDestacado />
      <LocalesAdheridos />
    </main>
  );
}

export default Layout;
