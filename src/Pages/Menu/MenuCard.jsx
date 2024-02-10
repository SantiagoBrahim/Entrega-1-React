import React from "react";

function MenuCard({ img, alt, title, price }) {
  return (
    <div className="card">
      <img src={img} alt={alt} />
      <h2>{title}</h2>
      <div>
        <p>${price}</p>
        <button>Pedir</button>
      </div>
    </div>
  );
}

export default MenuCard;
