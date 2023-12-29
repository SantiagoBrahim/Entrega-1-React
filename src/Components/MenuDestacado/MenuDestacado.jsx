import React from "react";
import { MenuDestacadoStyled } from "./MenuDestacadoStyles";

import { menuDestacado } from "./menu";
import ComidaDestacada from "./ComidaDestacada";

function MenuDestacado() {
  return (
    <MenuDestacadoStyled id="menu">
      <h2>Menú Destacado</h2>
      <hr />
      <div className="productsContainer">
        {menuDestacado.map((comida) => {
          return (
            <ComidaDestacada
              key={comida.id}
              name={comida.name}
              img={comida.img}
              price={comida.price}
            />
          );
        })}
      </div>
      <hr />
    </MenuDestacadoStyled>
  );
}

export default MenuDestacado;
