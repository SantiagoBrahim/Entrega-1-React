import React from "react";
import { HeaderStyled } from "./HeaderStyles";
import Navbar from "./Navbar/Navbar";

import logo from "./../../assets/imgs/Logo/logo.png";

function Header() {
  return (
    <HeaderStyled>
      <a href="#">
        <img src={logo} alt="logo" />
      </a>
      <Navbar />
    </HeaderStyled>
  );
}

export default Header;
