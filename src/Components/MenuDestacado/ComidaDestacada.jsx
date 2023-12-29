import React from "react";

function ComidaDestacada({ name, img, price }) {
  return (
    <div className="product">
      <img src={img} alt={name} />
      <h3>{name}</h3>
      <div>
        <p>${price}</p>
        <button>Pedir</button>
      </div>
    </div>
  );
}

export default ComidaDestacada;
