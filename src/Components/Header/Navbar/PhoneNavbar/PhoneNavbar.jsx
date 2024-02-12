import React from "react";
import { PhoneNavbarStyled } from "./PhoneNavbarStyles.js";
import { useContext } from "react";
import phoneNavContext from "./PhoneNavbarContext.jsx";
import { Link } from "react-router-dom";

function PhoneNavbar() {
  const { phoneNavState, closePhoneNav } = useContext(phoneNavContext);
  return (
    <PhoneNavbarStyled
      className="phone-nav"
      style={{ display: phoneNavState.display }}
      onClick={closePhoneNav}
    >
      <ul className="navbarLinks">
        <li>
          <Link to="/menu" onClick={closePhoneNav}>
            Menú
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={closePhoneNav}>
            Sobre Nosotros
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={closePhoneNav}>
            Contacto
          </Link>
        </li>
      </ul>
    </PhoneNavbarStyled>
  );
}

export default PhoneNavbar;
