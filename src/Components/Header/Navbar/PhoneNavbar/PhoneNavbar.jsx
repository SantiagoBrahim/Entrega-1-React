import React from "react";
import { PhoneNavbarStyled } from "./PhoneNavbarStyles.js";
import { useContext } from "react";
import phoneNavContext from "./PhoneNavbarContext.jsx";

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
          <a href="/menu" onClick={closePhoneNav}>
            Menú
          </a>
        </li>
        <li>
          <a href="/about" onClick={closePhoneNav}>
            Sobre Nosotros
          </a>
        </li>
        <li>
          <a href="/contact" onClick={closePhoneNav}>
            Contacto
          </a>
        </li>
      </ul>
    </PhoneNavbarStyled>
  );
}

export default PhoneNavbar;
