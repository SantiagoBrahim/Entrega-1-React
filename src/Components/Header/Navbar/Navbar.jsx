import React from "react";
import { NavbarStyled } from "./NavbarStyles";

function Navbar() {
  return (
    <NavbarStyled>
      <ul className="navbarLinks">
        <li>
          <a href="#menu">Menú</a>
        </li>
        <li>
          <a href="#locals">Locales</a>
        </li>
        <li>
          <a href="#">Contacto</a>
        </li>
      </ul>
      <button className="cartIcon">
        <i className="fa-solid fa-cart-shopping"></i>
      </button>
      <button className="navbarMenuIcon">
        <i className="fa-solid fa-bars"></i>
      </button>
    </NavbarStyled>
  );
}

export default Navbar;
