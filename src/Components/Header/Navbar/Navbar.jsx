import React from "react";
import { NavbarStyled } from "./NavbarStyles";
import phoneNavContext from "./PhoneNavbar/PhoneNavbarContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const { togglePhoneNav } = useContext(phoneNavContext);

  return (
    <NavbarStyled>
      <ul className="navbarLinks">
        <li>
          <Link className="navbar__link" to="/menu">
            Menú
          </Link>
        </li>
        <li>
          <Link className="navbar__link" to="/about">
            Sobre Nosotros
          </Link>
        </li>
        <li>
          <Link className="navbar__link" to="/contact">
            Contacto
          </Link>
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
