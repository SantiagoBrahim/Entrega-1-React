import React from "react";
import { NavbarStyled } from "./NavbarStyles";
import phoneNavContext from "./PhoneNavbar/PhoneNavbarContext";
import { useContext } from "react";

function Navbar() {
  const { togglePhoneNav } = useContext(phoneNavContext);

  return (
    <NavbarStyled>
      <ul className="navbarLinks">
        <li>
          <a href="/menu">Menú</a>
        </li>
        <li>
          <a href="/about">Sobre Nosotros</a>
        </li>
        <li>
          <a href="/contact">Contacto</a>
        </li>
      </ul>
      <button className="cartIcon">
        <i className="fa-solid fa-cart-shopping"></i>
      </button>
      <button className="navbarMenuIcon" onClick={togglePhoneNav}>
        <i className="fa-solid fa-bars"></i>
      </button>
    </NavbarStyled>
  );
}

export default Navbar;
