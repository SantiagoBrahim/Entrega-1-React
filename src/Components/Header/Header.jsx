import React from "react";
import { HeaderStyled } from "./HeaderStyles";
import Navbar from "./Navbar/Navbar";
import PhoneNavbar from "./Navbar/PhoneNavbar/PhoneNavbar";
import phoneNavContext, {
  phoneNavbarOpen,
} from "./Navbar/PhoneNavbar/PhoneNavbarContext";
import { useState } from "react";
import { Link } from "react-router-dom";

import logo from "./../../assets/imgs/Logo/logo.png";

function Header() {
  const [phoneNavState, setPhoneNavState] = useState(phoneNavbarOpen.Closed);
  const togglePhoneNav = () => {
    phoneNavState === phoneNavbarOpen.Closed
      ? setPhoneNavState(phoneNavbarOpen.Open)
      : setPhoneNavState(phoneNavbarOpen.Closed);
  };
  const closePhoneNav = () => {
    setPhoneNavState(phoneNavbarOpen.Closed);
  };

  return (
    <phoneNavContext.Provider
      value={{ phoneNavState, togglePhoneNav, closePhoneNav }}
    >
      <HeaderStyled>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <Navbar />
      </HeaderStyled>
      <PhoneNavbar />
    </phoneNavContext.Provider>
  );
}

export default Header;
