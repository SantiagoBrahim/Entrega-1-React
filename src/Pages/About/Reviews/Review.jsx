import React from "react";

function Review({ stars, name, description }) {
  let starString = "";

  for (let i = 0; i < stars; i++) {
    starString += "⭐";
  }

  return (
    <div className="review">
      <h4>{starString}</h4>
      <p>{stars}/5 Estrellas</p>
      <div className="review__description">
        <h5 className="name">{name}</h5>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Review;
