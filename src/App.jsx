import { useState } from "react";
import { GlobalStyle } from "./GlobalStyles/GlobalStyles.js";

import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header.jsx";
import Layout from "./Pages/Layout.jsx";
import About from "./Pages/About/About.jsx";
import MenuPage from "./Pages/Menu/MenuPage.jsx";
import ContactPage from "./Pages/Contact/ContactPage.jsx";
import Footer from "./Components/Footer/Footer.jsx";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="about" element={<About />} />
        <Route path="menu" element={<MenuPage />} />
        <Route path="contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
