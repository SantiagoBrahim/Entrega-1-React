import React from "react";
import { LocalesAdheridosStyled } from "./LocalesAdheridosStyles";

import iframeImg from "../../assets/imgs/Logo/logoConNombre500x500.png";

import Local from "./Local";
import { locals } from "./locals";

function LocalesAdheridos() {
  return (
    <LocalesAdheridosStyled id="locals">
      <h2>Locales Adheridos</h2>
      <hr />
      <div className="localsContainer">
        {locals.map((local) => {
          return (
            <Local
              key={local.id}
              name={local.name}
              link={local.link}
              img={local.img}
            />
          );
        })}
      </div>
      <hr />
      <iframe src={iframeImg} name="local-iframe"></iframe>
    </LocalesAdheridosStyled>
  );
}

export default LocalesAdheridos;
