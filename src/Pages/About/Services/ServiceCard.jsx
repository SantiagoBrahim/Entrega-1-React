import React from "react";

function ServiceCard({ emoji, title, description }) {
  return (
    <div className="card">
      <div>
        <h4>{emoji}</h4>
        <h3>{title}</h3>
        <hr />
      </div>
      <p>{description}</p>
    </div>
  );
}

export default ServiceCard;
