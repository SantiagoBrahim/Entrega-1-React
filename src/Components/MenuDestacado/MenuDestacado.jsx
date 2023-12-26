import React from "react";
import { MenuDestacadoStyled } from "./MenuDestacadoStyles";

import pizzaImg from "../../assets/imgs/Productos/pizzaPepperoni.jpg";
import hamburguesaImg from "../../assets/imgs/Productos/hamburguesa.jpg";
import empanadasImg from "../../assets/imgs/Productos/empanadas.webp";
import napolitanaImg from "../../assets/imgs/Productos/milanesaNapolitana.webp";

function MenuDestacado() {
  const productosDestacados = [
    {
      name: "Pizza de Pepperoni",
      img: pizzaImg,
      price: 5800,
    },
    {
      name: "Hamburguesa Super Bacon",
      img: hamburguesaImg,
      price: 7799,
    },
    {
      name: "Docena de Empanadas de Carne",
      img: empanadasImg,
      price: 7400,
    },
    {
      name: "Milanesa Napolitana con Papas Fritas",
      img: napolitanaImg,
      price: 10000,
    },
  ];

  return (
    <MenuDestacadoStyled id="menu">
      <h2>Menú Destacado</h2>
      <hr />
      <div className="productsContainer">
        {/* PIZZA */}
        <div className="product">
          <img
            src={productosDestacados[0].img}
            alt={productosDestacados[0].name}
          />
          <h3>{productosDestacados[0].name}</h3>
          <div>
            <p>${productosDestacados[0].price}</p>
            <button>Pedir</button>
          </div>
        </div>

        {/* HAMBURGUESA */}
        <div className="product">
          <img
            src={productosDestacados[1].img}
            alt={productosDestacados[1].name}
          />
          <h3>{productosDestacados[1].name}</h3>
          <div>
            <p>${productosDestacados[1].price}</p>
            <button>Pedir</button>
          </div>
        </div>

        {/* EMPANADAS */}
        <div className="product">
          <img
            src={productosDestacados[2].img}
            alt={productosDestacados[2].name}
          />
          <h3>{productosDestacados[2].name}</h3>
          <div>
            <p>${productosDestacados[2].price}</p>
            <button>Pedir</button>
          </div>
        </div>

        {/* MILANESA NAPOLITANA */}
        <div className="product">
          <img
            src={productosDestacados[3].img}
            alt={productosDestacados[3].name}
          />
          <h3>{productosDestacados[3].name}</h3>
          <div>
            <p>${productosDestacados[3].price}</p>
            <button>Pedir</button>
          </div>
        </div>
      </div>
      <hr />
    </MenuDestacadoStyled>
  );
}

export default MenuDestacado;
