import React from "react";

function Local({ name, link, img }) {
  return (
    <div className="local">
      <a href={link} target="local-iframe">
        <img src={img} alt={"Logo" + name} />
      </a>
    </div>
  );
}

export default Local;
